const express = require("express");
const router = express.Router();


//@route get api/users
//@description test route
// @access public
router.get('/', (req, res) => res.send("user route"))

module.exports = router