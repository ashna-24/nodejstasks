const readline = require('readline');
const readdata = readline.createInterface(process.stdin, process.stdout);
readdata.question('Enter first value ', (num1)=>{
   readdata.question('Enter second value ', (num2)=>{
      const sum = (+num1) + (+num2);
      console.log("Sum is "+ sum);
      readdata.close();
   });
})