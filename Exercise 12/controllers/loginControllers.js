const asyncHandler = require("express-async-handler");
const token = require("../middlewares/tokens");
const jwt = require("jsonwebtoken");
const jwtKey = "my_secret_key";

exports.user_create = asyncHandler(async(req, res, next) =>{
	const user = req.body;
  	console.log("Username: ", user.username);
  	console.log("Password: ", user.password);
  	token.userdata.push(user); 	
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
});

exports.user_list =asyncHandler(async(req, res, next)=>{
	res.json(token.userdata);
})

exports.user_welcome =asyncHandler(async(req,res,next)=>{
	jwt.verify(req.token, jwtKey, (err, authdata)=>{
		if(err){
			res.json({
				message: false,
				data: "error",
			});
		}
		else{
			res.json({
				message :"Welcome to profile",
				data: authdata
			});
		}
	});
});