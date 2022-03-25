const fs=require('fs')
const readline=require('readline')
const GreetInFile = (fullname)=>{
    fs.writeFile('greet.txt',`Hello ${fullname}`,err=>{
        if(err) {
            console.log("Error occoured when writing into file");
        }
    });
}
const rl=readline.createInterface({
    input :process.stdin,
    output:process.stdout
})
rl.question('What is your name ',(fullname)=>{
    rl.close();
    GreetInFile(fullname);
})