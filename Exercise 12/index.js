require('dotenv').config(); 
const express = require('express');
const routes = require('./routes/sampleRoute');
const login =require("./routes/loginRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(login);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});