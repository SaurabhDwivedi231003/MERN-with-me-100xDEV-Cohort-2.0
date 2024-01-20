// //--------------- Simple Function----------------------------

// // function sum(a,b){
// //     console.log(a*b);
// //     return a+b;
// // }
// // // console.log(sum(5,2));

// // const sumfunc = sum(15,26);
// // console.log(sumfunc); 

// //-----------  Function callBack  ----------

// // given three function

// // function sum(a,b ){

// function sum(a, b, fncTocall){
//     const result = a+b;

//     console.log(result);

//     fncTocall(result); // here we are calling function isnside a function it is called function callBack
// }

// function displayResult(data)
// {
//     console.log("Sum result is : " + data);
// }
// function displayResultPassive(data)
// {
//     console.log("Sum result is : " + data);
// }

// // You're given 3 functions above ,
// // Now you're noly allowed to call one function after this
// // How will your disolayResult of a sum

// //let ans = sum(10,20);
// let ans = sum(10,20 , displayResult);

//---------------Better Example of CallBack-------------------------

//-------without CALLBACK--------

// function calculator( a , b , type){
//     if( type == "sum") return a+b;
//     if( type == "minus") return a-b;
// }

//  function calculator( a , b , type){
//      if( type == "sum"){
//           const value =  sum(a,b);
//           console.log(value);
//         // return sum(a,b);
//      }
//      if( type == "minus"){
//          const value = sub(a,b);
//          console.log(value);
//      } 
//  }


// function sum(a,b){ console.log(a+b); }
//function sum(a,b){ return a+b; }
//function sub(a,b){ return a-b; }

//const value = calculator(10 , 20 , 'sum');  // This is not a call back as 'sum' here is passed as a variable
// const value = calculator(10 , 20 , sum);  // This is CallBack as we a passing sum as a fucntion here 
// console.log(value);

//-------witH CALLBACK--------


// // function calculator( a , b , callBackFuncExample){
// //     const ans = callBackFuncExample (a,b);
// //     console.log(ans);
// // }
// // // function sum(a,b){ console.log(a+b) }
// // function sum(a,b){ return a+b; }

// // function sub(a,b){ return a-b; }

// // const value = calculator(50 , 20 , sub);

// // console.log(sum(50,20));


//---------------------SET TIMEOUT FUNCTION (CallBak Function)-----------------------------

//  function greet(){
//      console.log("Hello I'm Inside a Greet. ")
//  }
//  
//  setTimeout(greet , 5*1000);  // 5 indicate the second.
// setInterval(greet , 2*1000);  // 5 indicate the second.

//---------How real setTime was made , let create on own.

// function setTimeoutCreatedOwn(functionName , duration){
//     sleep(duration); // here we to create this function on our own.
//     functionName();
// }
// setTimeoutCreatedOwn(greet , 3*1000);



//==================ASSIGNMENT==========================

