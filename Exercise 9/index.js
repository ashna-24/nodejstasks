const express = require('express')
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

let books = [];

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    console.log("ID: ", book.id);
    console.log("Name: ", book.name);
    console.log("Author: ", book.author);
    console.log(book);
    books.push(book);
    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(id)
    for (let book of books) {
        if (book.id === id) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
});

app.delete('/book/:id', (req, res) => {
    const id = Number(req.params.id);
    books = books.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });
    res.send('Book is deleted');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));