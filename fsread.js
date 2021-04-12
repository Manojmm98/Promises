let fs = require('fs');
console.log("before");
//promise is always in pending stage initially
let promise =fs.promises.readFile("f12.txt");
console.log("intial state",promise);
//then function is called when promise is settled 
promise.then(function(data) {
    console.log("result is",data);
});
promise.catch(function(err) {
    console.log("error is",err);
});
console.log("after");
