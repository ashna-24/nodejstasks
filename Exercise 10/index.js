const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const port = 8000;

app.use('/uploads', express.static(path.join(__dirname, '/images')));

app.post('/upload', (req, res, next) => {
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'images');
        },
        filename: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now() + path.extname(file.originalname));
            return file;
        }
    });
    var upload = multer({storage: storage}).single('image');
    upload(req,res,function(error){
        if (error) {
            console.error(error);
            return res.status(201).json({
                status: "Failed",
                message: 'File uploded failed'
            });
        }
        else {
            res.send(req.file)
            return res.status(201).json({
                status: "Success",
                message: 'File uploded successfully',
            });
        } 
    })
});

app.get('/download/:id', function(req, res){
    const files = `${__dirname}/images/${String(req.params.id)}`;
    fs.readFile(files, (err, file) => {
        if (err) {
            return res.status(201).send('Could not download file');
        }
        res.setHeader('Content-Type', 'image.jpg');
        res.send(file);
    });
});

app.listen(port, () => 
    console.log(`Hello world app listening on port ${port}!`)
);