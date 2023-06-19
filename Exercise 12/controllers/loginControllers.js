const asyncHandler = require("express-async-handler");
let token = require("../middlewares/tokens");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret_key";
const jwtExpirySeconds = 300;

exports.user_create = asyncHandler(async(req, res, next) =>{
	const user = req.body;
  	console.log("Username: ", user.username);
  	console.log("Password: ", user.password);
  	token.userdata.push(user);
  	console.log(token.userdata);
  	
	let isPresent = false;
	let isPresentIndex = null;

	for(let i=0; i< token.userdata.length;i++){
		if((token.userdata[i].username === user.username) && (token.userdata[i].password === user.password)){
			isPresent = true;
			isPresentIndex = i;
      		break;
		}
	}

	if (isPresent) {
		const tokens = jwt.sign(token.userdata[isPresentIndex], jwtKey);
		res.json({
		  login: true,
		  token: tokens,
		  data: token.userdata[isPresentIndex],
		});
	} 
	else {
		res.json({
			login: false,
			error: "please check name and password.",
		});
	}
    /* res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 }); */
});

exports.user_list =asyncHandler(async(req, res, next)=>{
	res.json(token.userdata);
})

exports.user_welcome =asyncHandler(async(req,res,next)=>{
    const tokens = req.header('Authorization');
	console.log(tokens);
	/* console.log(token); */
	/* if(tokens){
		const decode = jwt.verify(tokens, jwtKey);
		console.log(decode);
		res.json({
			login :true,
			data: decode,
		});
	}
	else{
		res.json({
			login: false,
			data: "error",
		});
	} */
	
	/* const tokens = req.header('Authorization');
    console.log(tokens);
	if(token.username == tokens.username){
		console.log(token.username);
		res.send("Welcome user");
        return; 
		var payload
		try {
			payload = jwt.verify(token, jwtKey);
			console.log(payload);
		} 
		catch (e) {
			if (e instanceof jwt.JsonWebTokenError) {
				return res.status(401).end()
			}
			return res.status(400).end()
		}
		res.send(`Welcome ${payload.username}!`)
	}
	res.status(404).end(); */
	/* if (!token) {
		return res.status(401).end()
	}

	var payload
	try {
		payload = jwt.verify(token, jwtKey)
	} 
    catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {
			return res.status(401).end()
		}
		return res.status(400).end()
	}
	res.send(`Welcome ${payload.username}!`) */
});