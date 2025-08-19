const fs = require("fs");
//SYNCHRONOUS CALL...
/*fs.writeFileSync('./test.txt','Learning nodejs');*/

//Asynchronous call..
/*fs.writeFile('./test.txt','Learning nodejs',(err) => {});*/

/*const result = fs.readFileSync('./File.txt',"utf-8");
console.log(result);*/

/*fs.readFile('./File.txt',"utf-8", (err,result) => {
    if(err){
        console.log("Error:",err);
    }
    else{
        console.log(result);
    }
});
*/
/*fs.appendFileSync('./File.txt',new Date().getDate().toLocaleString());*/
/*fs.appendFileSync('./File.txt',"Lalith Ghatty\n");
fs.cpSync('./File.txt','./copy.txt');
fs.unlinkSync('./copy.txt');*/
console.log(fs.statSync('./File.txt'));



