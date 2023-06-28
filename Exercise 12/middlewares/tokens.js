const username =require("../controllers/loginControllers");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

const token = jwt.sign({ username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
});

function verifytoken(req, res, next) {
    const authheader=req.headers['authorization'];
    if (typeof authheader !== 'undefined') {
        var bearer = authheader.split(' ')[1];
        req.tokens = bearer;
        next();
    } 
    else {
        res.sendStatus(403);
    }
}

const userdata = [];

module.exports={token,userdata,verifytoken};