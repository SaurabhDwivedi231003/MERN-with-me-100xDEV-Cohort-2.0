// function square(n){  return n*n; }

// function cube(n){ return n*n*n;  }

// function sumOf(a,b,fn)
// {
//     let func1 = fn(a);
//     let func2 = fn(b);
//     return func1 + func2;
// }

// // function sumOfsqure(a,b){
// //     let square1 = square(a);
// //     let square2 = square(b);

// //         return square1 + square2;
// // }
// // function sumOfCube(a,b){
// //     let cube1 = cube(a);
// //     let cube2 = cube(b);

// //         return cube1 + cube2;
// // }
// // console.log(sumOfsqure(2,3));
// // console.log(sumOfCube(2,3));

// console.log(sumOf(2,5,cube));

  const fs = require("fs");
  //fileSystem
  fs.readFile("a1.txt" , "utf-8" , function(err , data){
      console.log(data);
      console.log(err);
})