const args = process.argv;
args.forEach((arg, index) => {
    setTimeout(()=>{ 
        console.log('Argument ' + index + ': ' + arg);
    },2000);
});

if (args.length === 2) {
    console.log("No numbers provided!");
    process.exit(1);
}
else if(args.length === 3){
    console.log("Only one number is provided!");
    process.exit(1);
}
else{
    setTimeout(()=>{
        function sum(){
            var sum = 0; 
            for(var i=2;i<args.length;i++){
                if(isNaN(Number(args[i]))){
                    console.log("Invalid data");
                    return;
                }
                else{
                    sum = (+sum) + (+args[i]);
                }
            }
            console.log(sum);
        }
        sum();
    },3000);
}
