const username =require("../controllers/loginControllers");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

const token = jwt.sign({ username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
});

const userdata = [];

module.exports={token,userdata};