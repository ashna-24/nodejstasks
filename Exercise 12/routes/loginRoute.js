const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bodyparser = require('body-parser');
const user_login =require("../controllers/loginControllers");

router.use(cookieParser());
router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.post("/signin", user_login.user_create);

router.get("/welcome", user_login.user_welcome);

module.exports = router;