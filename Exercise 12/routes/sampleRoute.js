const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');
const book_controller = require("../controllers/sampleControllers");

router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.post("/book",book_controller.book_create);

router.get("/books",book_controller.book_list);

router.get("/book/:id",book_controller.book_detail);

router.delete("/book/:id", book_controller.book_delete);

router.put("/book/:id",book_controller.book_update);

module.exports = router;