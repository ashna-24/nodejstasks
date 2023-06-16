const express = require('express');
const logger = require('./utils/logger');
const app = express();
const port = 8000;
const host = "localhost";

app.get('/',(req,res) => {
    res.send("Hello World!");
    logger.info("Server Sent A Hello World!");
})

app.get('/calc',(req,res) => {
    const x = y + 10;
    res.send(x.toString());
})

app.use((err,req,res,next) => {
    res.status(500).send('Could not perform the calculation!');
    logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

app.use((req,res,next) => {
    res.status(404).send("PAGE NOT FOUND");
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

app.listen(port, () => {
    console.log("Server started...");
    logger.info(`Server started and running on http://${host}:${port}`)
})