let x = "hhasdhqavsd";
let y = 10;

function isnumber(x,y){
    if(isNaN(Number(x))){
        return true;
    }
    if(isNaN(Number(y))){
        return true;
    }
    return false;
}

function sum(x,y){
    let customPromise = new Promise((resolve, reject)=>{
        let result1 = (+x) + (+y);
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            reject(new Error("Not Valid...!"));
        }
        else{
            resolve(result1);
        }
    });
    return customPromise;
}

function sub(x,y){
    let customPromise = new Promise((resolve, reject)=>{
        let result2 = x - y;
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            reject(new Error("Not Valid...!"));
        }
        else{
            resolve(result2);
        }
    });
    return customPromise;
}

function mult(x,y){
    let customPromise = new Promise((resolve, reject)=>{
        let result3 = x * y;
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            reject(new Error("Not Valid...!"));
        }
        else{
            resolve(result3);
        }
    });
    return customPromise;
}

function division(x,y){
    let customPromise = new Promise((resolve, reject)=>{
        let result4 = x / y;
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            reject(new Error("Not Valid...!"));
        }
        else{
            resolve(result4);
        }
    });
    return customPromise;
}

//Using Promise.all() method.

Promise.all([sum(x,y), sub(x,y), mult(x,y), division(x,y)]).then(values =>{
    try{
        console.log(values);
        sum = values.reduce((x,y) => x+y, 0);
        console.log("Total Sum :",sum);
    }catch{
        console.log("Invalid input...!");
    }
});

/* sum(x,y).then(data=>{
    r1 = data;
    console.log("Sum :", r1);
    sub(x,y).then(data=>{
        r2 = data;
        console.log("Difference :", r2);
        mult(x,y).then(data=>{
            r3 = data;
            console.log("Product :", r3);
            division(x,y).then(data=>{
                r4 = data;
                console.log("Division :", r4);
                console.log("Finalresult :", r1+r2+r3+r4);
            })
            .catch(err=>{
                console.log(err.message);
            });
        })
        .catch(err=>{
            console.log(err.message);
        });
    })
    .catch(err=>{
        console.log(err.message);
    });
})
.catch(err=>{
    console.log(err.message);
}); */