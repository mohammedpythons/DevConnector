const jwt = require("jsonwebtoken")
const config = require("config")



module.exports =  function(req, res, next) {
    // Get the token form the header
    const token = req.header("x-auth-token");


    //check if not token
    if (!token) {
        return res.status(401).json({msg: "No token, authorization denied"});
    }


    // Veryfiy token
    try {
        const decodded = jwt.verify(token, config.get("jwtSecret"));

        req.user = decodded.user;
        next();
    } catch(err) {
        res.status(401).json({msg: "Token is not valid"})
    }

}