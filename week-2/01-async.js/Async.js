const { promises } = require("dns");
const fs = require("fs");
const { resolve } = require("path");
//fileSystem

//------  ASYNC without Promise ---------------

function readandThenWrite(cb){
    fs.readFile("a1.txt" , "utf-8" , function(err , data){
        data = data  + " aur yaha hume write kiya.";
             console.log(data);
             cb(data);  
            })
    }
 function onDone(data){
    console.log(data);
    } 
readandThenWrite(onDone)


//-------with Promise-----------

 function readandThenWrite(){
     return new Promise(function(resolve){
         fs.readFile("a1.txt" , "utf-8" , function(err , data){
             data = data  + " aur yaha hume write kiya.";
             resolve(data);  
         })
     })
 }
 function main(){
 readandThenWrite().then(function(data){
     console.log(data);
 });
 }
 main();

//--------------syntax diffrence between NORMAL async and PROMIS-----------------

// // ---Normal way
function myOwnSetTimeOutHere(fn , duration){
    setTimeout(fn, duration);
}
myOwnSetTimeOutHere(function(){
    console.log("Hey I'm Running a time out")
},3000);

//----Promis Way------

// function myOwnSetTimeOut(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// myOwnSetTimeOut(2000).then(function () {
//     console.log("Hyyy I am your setTimeOut");
// })


new Promise(function(resolve){
    resolve("Hi there!")
}).then(function(arg){
    console.log("inside then")
})



