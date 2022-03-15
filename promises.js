function function1(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);
        }
        else{
            reject('Something went wrong');
        }
    });
}
function function2(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);
        }
        else{
            reject('Something went wrong');
        }
    });
}
function function3(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve(value+10);  
        }
        else{
            reject('Something went wrong');
        }
    });
}
function1(10,false).then((result1)=>function2(result1,false)).then((result2)=>function3(result2,false)).then((result3)=>console.log(result3)).catch((error)=>console.log(error));
