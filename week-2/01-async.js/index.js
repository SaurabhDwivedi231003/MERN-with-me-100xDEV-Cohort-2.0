// CallBack , Promise , Async do same this , just to enhance syntax we used diiffrent way and mostly Async way.

//  const fs = require("fs");
//  //fileSystem
//  fs.readFile("a.txt" , "utf-8" , function(err , data){
//      console.log(data);
//  })

//  console.log("Hello Motto! ")
//  let a = 0;
//  for (let i=0; i<1000000000; i++){
//        a++;
//  }
//  console.log("Hello Motto 2");


//-----Ugly Way of writing Async function--------

// //  my Own Async function
// function saurabhReadFile(cb){
//     fs.readFile("a.txt" , "utf-8" , function(err,data){
//         cb(data);
//     });
// }

// // callBack function
// function onDone(data){
//     console.log(data);
// }

// saurabhReadFile(onDone);

//--------Promise : is a better way of writing Async Function ----------------------
//  new Promis is a class and we are making objects out of it.

// function saurabhReadFile(){
//     return new Promise(function(resolve){
//         console.log("Inside Promise")
//         fs.readFile("a.txt" , "utf-8" , function(err,data){
//             console.log("Before resolve");
//             resolve(data);
//         });
//     })
// }
// function onDone(data)
// {
//     console.log(data);
// }

// var a= saurabhReadFile();
// a.then(onDone);
// console.log(a);


//----------can be wrriten like this.-------------------
// let p = new Promise(function(onDone) {
//         onDone("Hi there ");
// });

// p.then(function(){
//     console.log(p);
// })

// function saurabhAsyncFunction() {
//     let p = new Promise(function (onDone) {
//         onDone("Hi there ");
//     });
//     return p;
// }

// saurabhAsyncFunction().then(function (p) {
//     console.log(p);
// });

//           OR           //

//  let value = saurabhAsyncFunction();
//  value.then(function (p) {
//     console.log(p);
// });


//----------- ASYNC AWAIT ----------------------

function saurabhAsyncFunction() {
    let p = new Promise(function (onDone) {
        onDone("Hi there ");
    });
    return p;
}

//         NORMAL WAY
// function main(){
//     saurabhAsyncFunction().then(function (p) {   // in async we dont need .then()
//         console.log(p);
//     });   
// }
// main();

// ASYNC AWAIT  : only while calling it is used not while defining. 
async function main() {
    const p = await saurabhAsyncFunction();
    console.log(p);
}
main();
