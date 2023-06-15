require('dotenv').config(); 
const http = require('http');
const port = parseInt(process.env.PORT, 10) || 5000;
const name = process.env.MYNAME || "Ashna";
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, ' + name + '!');
    res.end();
}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})