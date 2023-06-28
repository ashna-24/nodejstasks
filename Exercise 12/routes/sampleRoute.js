const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const bodyparser = require('body-parser');
const book_controller = require("../controllers/sampleControllers");

router.use(cookieParser());
router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.post("/books",book_controller.book_create);

router.get("/books",book_controller.book_list);

router.get("/books/:id",book_controller.book_detail);

router.delete("/books/:id", book_controller.book_delete);

router.put("/books/:id",book_controller.book_update);

module.exports = router;