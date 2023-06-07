const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 8081;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port http://${hostname}:${port}/`);
});