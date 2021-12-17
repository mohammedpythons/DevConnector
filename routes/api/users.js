const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
//@route Post api/users
//@description register user
// @access public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please iclude a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // 1-get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        // the following gives you an icon if the image is not there
        d: "mm",
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //2-Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // 3-Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = config.get("jwtSecret");
      jwt.sign(payload, token, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
