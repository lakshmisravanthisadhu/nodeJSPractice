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

async function result(){
    let result=function1(10,false);
    console.log(result);
}
async function result1(){
    let result1=await function1(10,false);
    let result2=await function2(result1,false);
    let result3=await function3(result2,false);
    console.log(result3);
}
result();
result1();