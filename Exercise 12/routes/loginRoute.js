const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bodyparser = require('body-parser');
const user_login =require("../controllers/loginControllers");
const {verifytoken} =require("../middlewares/tokens");

router.use(cookieParser());
router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.post("/signin", user_login.user_create);

router.get("/userlist", user_login.user_list);

router.get("/welcome", verifytoken , user_login.user_welcome);

module.exports = router;