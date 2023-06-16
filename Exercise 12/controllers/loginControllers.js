const asyncHandler = require("express-async-handler");
let token = require("../middlewares/tokens");
const jwtExpirySeconds = 300

const users = {
	user1: "password1",
	user2: "password2",
}

exports.user_create = asyncHandler(async(req, res, next) =>{
    const { username, password } = req.body;
    console.log("Username :",username);
    console.log("Password :", password);
	if (!username || !password || users[username] !== password) {
		return res.status(401).end()
	}
    res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 });
    res.send("User is created..!!");
});

exports.user_welcome =asyncHandler(async(req,res,next)=>{
    const tokens = req.cookies.token;
    console.log(tokens);
	if (!tokens) {
		return res.status(401).end()
	}

	var payload
	try {
		payload = jwt.verify(tokens, jwtKey)
	} 
    catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
	}
	res.send(`Welcome ${payload.username}!`)
});