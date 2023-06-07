const express = require("express");
const path = require('path');
const app = express();
var PORT = 8000;
  
// View Engine Setup
app.set("views", path.join(__dirname));
app.set("view engine", "ejs");
  
app.get("/user", function(req, res){
  
    var name = req.query.name;
    var age = req.query.age;
      
    console.log("Name :", name);
    console.log("Age :", age);
})
   
app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});
  
app.get('/:id', (req, res) => {
  res.send(`<h1>${req.params.id}</h1>`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/signup', function (req, res) {
  const data = req.body;

  console.log("Name: ", data.name);
  console.log("Age: ", data.age);
  console.log("Gender: ", data.gender);

  res.json(data);
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});