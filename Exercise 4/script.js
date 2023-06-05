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

function sum(x,y,callbackrslt){
    setTimeout(function(){
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            const error = new Error("Not Valid...!");
            callbackrslt(error);
        }
        else{
            result1 = (+x) + (+y);
            callbackrslt(null,result1);
        }
    },100);
}

function sub(x,y,callbackrslt){
    setTimeout(function(){
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            const error = new Error("Not Valid...!");
            callbackrslt(error);
        }
        else{
            result2 = x - y;
            callbackrslt(null,result2);
        }
    },100);
}

function mult(x,y,callbackrslt){
    setTimeout(function(){
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            const error = new Error("Not Valid...!");
            callbackrslt(error);
        }
        else{
            result3 = x * y;
            callbackrslt(null,result3);
        }
    },100);
}

function division(x,y,callbackrslt){
    setTimeout(function(){
        let resultfn = isnumber(x,y);
        if(resultfn == true){
            const error = new Error("Not Valid...!");
            callbackrslt(error);
        }
        else{
            result4 = x / y;
            callbackrslt(null,result4);
        }
    }
    ,100);
}

sum(x,y,function(err, data){
    if(err){
        console.log(err.message);
    }
    else{
        r1 = data;
        console.log("Sum :", r1);
        sub(x,y,function(err, data){
            if(err){
                console.log(err.message);
            }
            else{
                r2 = data;
                console.log("Difference :", r2);
                mult(x,y,function(err, data){
                    if(err){
                        console.log(err.message);
                    }
                    else{
                        r3 = data;
                        console.log("Product :", r3);
                        division(x,y,function(err, data){
                            if(err){
                                console.log(err.message);
                            }
                            else{
                                r4 = data;
                                console.log("Division :", r4);
                                console.log("Total sum :", r1+r2+r3+r4);
                            }
                        });
                    }
                });
            }
        });
    }
});