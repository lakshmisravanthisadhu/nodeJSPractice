function1(10,function(result1,error){
    if(!error){
        function2(result1,function(result2,error){
            if(!error){
                function3(result2,function(result3,error){
                    if(!error){
                        console.log('Result '+result3);
                    }
                    else{
                        console.log('Something went wrong');
                    }
                });
            }
        });
    }
});
function function1(value,callback){
    callback(value+10,false);
}
function function2(value,callback){
    callback(value+10,false);
}
function function3(value,callback){
    callback(value+10,false);
}