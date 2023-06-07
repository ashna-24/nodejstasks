let x = 30;
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

async function finalResult(){
    try{
        const r1 = await sum(x,y);
        console.log("Sum :",r1);
        const r2 = await sub(x,y);
        console.log("Difference :",r2);
        const r3 = await mult(x,y);
        console.log("Product :",r3);
        const r4 = await division(x,y);
        console.log("Division :",r4);
        console.log("Total Sum :", r1+r2+r3+r4);
    }catch{
        console.log("Invalid input...!");
    }
}

finalResult();