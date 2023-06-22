const asyncHandler = require("express-async-handler");
let books = require('../shared-data/books');

exports.book_create = asyncHandler(async (req, res, next) => {
  const book = req.body;
  console.log("Id: ", book.Id);
  console.log("Book: ", book.Name);
  books.push(book);
  res.send('Book is added to the database');
});

exports.book_list = asyncHandler(async (req, res, next) => {
  res.json(books);
});

exports.book_detail = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  for(let book of books) {
    if(book.Id === id) {
        res.json(book);
        return;
    }
  }
  res.status(404).send('Book not found');
});

exports.book_delete = asyncHandler(async (req, res, next) => {
  const id = Number(req.params.id);
  books = books.filter(i =>{
    if (i.Id !== id) {
        return true;
    }
    res.send('Book is deleted');
    return false;
  });
  res.status(404).send('Book not found');
});

exports.book_update = asyncHandler(async (req, res, next) => {
  const id= Number(req.params.id);
  const newbook = req.body;
  for(let i=0 ; i<books.length ; i++){
    let book =books[i];
    if(book.Id === id){
      books[i] =newbook;
    }
  }
  res.send("Book is edited");
}); 
