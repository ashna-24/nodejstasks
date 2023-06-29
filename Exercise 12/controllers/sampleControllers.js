const asyncHandler = require("express-async-handler");
let books = require('../shared-data/books');

exports.book_create = asyncHandler(async (req, res, next) => {
  const book = req.body;
  books.push(book);
  res.status(201).json({
    Added: true,
    Data: books,
  });
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
    res.status(200).send('Book is deleted...!!');
    return false;
  });
  res.status(404).send('Book not found!!');
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
  res.status(200).json({
    Edited: "Book is updated...!!",
    Data: books,
  });
}); 
