const jwt = require('jsonwebtoken');

function auth(req, res, next) {

    const token = req.body.token || req.headers.authorization;            

    if(!token)
        return res.status(401).json({msg: "Unauthorized."})
    
    req.token = token;
    next();
}

module.exports = auth