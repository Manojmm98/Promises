let fs = require("fs");
console.log('before');
// fs.readFile("f1.txt","f2.txt","f3.txt",function cb(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data+"");
//     }
// })
let promise = fs.promises.readFile("f1.txt");
console.log(promise);
setTimeout(function(){
    console.log(promise);
},2000);
console.log("after");