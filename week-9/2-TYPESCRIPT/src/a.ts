// Basic Types in TypeScript

// Problem 1 : How to give types to argument of a function.
// Solution : Use type annotation.

// for javaScript look a.js file.

//-------TypeScript
function greet(firstName : string , lastName : string){  
    console.log("Hello " + firstName + " " + lastName);
}
greet("Saurabh", "Dwivedi"); 


// Problem 2 : Create a sum fuction to add two numbers, thing to learn is to give return type to a function.
function sum(a: number , b : number) : number{ // Type inference : this is not required but we can explicitily mention that "number"- should be returned as an output. 
            return a + b;
}
let value = sum(4,6);
console.log(value);

// Problem 3 : return true or false based on if user is 18+.
function checkAge(age : number) : boolean{
    return age >= 18;
}   
let result = checkAge(20);
console.log(result);

// CallBacks
// problem 4 : creat function that take another function as an input and runs it afterb1 second.
function runAfter(fn : ()=> number){
    setTimeout(fn , 1000);
}
runAfter(function(){
    console.log("inside function")
    return 10;
});



// 6 : Interfaces

// How can you assign a type to an object in TypeScript?
/* const user = {
    firstName : "saurabh",
    lastName : " dwivedi",
    email : "saurabh@gmail.com",
    age : 20
}

// to assign type to the user object we can use interface.

interface User{
    firstName : string,
    lastName : string,
    email : string,
    age : number
}
*/
// Question 1 : Create a function that return true or false if user is 18+.
// Solution 1 :

/* function isLegal(user){   //Normal JS
     if(user.age > 18) return true;
     else return false;
 }
  // Normal TS
 function isLegal(user : {   // but in this way we ave to define everytime we use ,violating DRY rule.
     firstName : string,
     lastName : string,
     age : number
 }){
     if(user.age > 18) return true;
     else return false;
 } */

//---Proper solution : using Interface
interface User {   
    firstName : string,
    lastName : string,
    age : number
}
function isLegal(user : User){
    if(user.age > 18) return true;
    else return false;
}

console.log(isLegal({
    firstName : "saurabh",
    lastName : "dwivedi",
    age : 19
}))

// 7. Types 
type GreetArt = number | string | boolean;
function greeting(id : GreetArt){
        console.log(id)
}
greeting(1)
greeting("1");

// 7.1 : Intersection
// what if we want to create a type that has every property of multiple type/interface

  type Employee = {
    name : string,
    startDate : Date
  }
  interface Manager {
    name : string,
    department : string
  }
  type TechLead = Employee & Manager;
  const t : TechLead = {
    name : "Seenu",
    startDate : new Date(),
    department : "absdewf"
  }
 console.log(t);

 // Interview Question : What is the diffrence between Interface and Type.
 // Answer : Interfaces can be extended in a class , and type lets you do union ( | ) and intersection ( & ).
 
 // 8. Arrays.

 type NumberArr = number[];
 function maxValue (arr : NumberArr){  // or  (arr : number[])
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){ max =  arr[i]; }
    }
    return max;
 }
console.log( maxValue([1,2,4,9]));

// ENUMS : enumerations in typescript are a feature that allow you to define a set of named constatnts.
// Concept behinf is to create a human-redable way to represent constant values which might otherwise be represented as union or strings.

// Problem : lets say you have a game where you have to perform an action based on weather the user has presented the "UP" arrow key , "DOWN" arrow key , "LEFT" arrow key , or "RIGHT"arrow key.
/*
function deSomething(keyPressed : string){
        
}
deSomething("up");
deSomething("down");
deSomething("left");
deSomething("right");
// Now : if we give any random string arguement it still accepts it and here our logic fails.
deSomething("someRandomKey");  // Logic fails.   */

// SOLUTION 1 (Normal solution) : 
type keyInput = "up" | "down" | "left" | "right";
function deSomething(keyPressed : keyInput){
        
}
deSomething("up");
deSomething("down");
deSomething("left");
deSomething("right");
//deSomething("someRandomKey");  // we can see compiler itself is telling it it wrong inout.

// SOLUTION 2 : ENUM
enum Direction {    // THESE are constant values.
    Up ,   // 0        Up = "up"  will work but all below should be string and same pattern, similarly , Up = 10 and all below should be numbers.
    Down , // 1     default
    Left , // 2     default
    Right  // 3     default
}

function doSomethingMore(keyPressed : Direction){

}
doSomethingMore(Direction.Up);
doSomethingMore(Direction.Down);
doSomethingMore(Direction.Right);
doSomethingMore(Direction.Left);
console.log(Direction.Left)


// 10 : 1GENERICS

// ---------------------
type input = number | string;
 function firstEle( arr : input[]){
    return arr[0];
 }
 const ValueOne = firstEle(["saurabh" , "dwivedi"]);
 // console.log(ValueOne.toUpperCase());  // Problem 1 : is that the valueOne can be string as well as number, toUpperCase is only for string.

 // saurabh.toUpperCase = SAURABH
 // 245.toUpperCase = invalid
 
 //Problem 2 : also we don't want mixed input : firsEle[1,3,6, "Saurabh" , 5, "seenu"] this is also a problem.

 // ------------------

 // Solution : GENERICS

 //---------Example-------------
 function identity<T>(arg: T) : T {
            return arg;
 }
 let output1 = identity<string>("myString");
 let output2 = identity<number>(1230);
 // This means we have created function that accepts multiple types
 console.log(output1.toUpperCase())


 //------------Original Problem solution
 function firstEleO<T>( arr : T[]) : T{
    return arr[0];
 }
 const ValueO = firstEleO<string>(["saurabh" , "dwivedi"]);   // OR below one
 const Value2 = firstEleO(["saurabh" , "dwivedi"]);
 const Value3 = firstEleO([true , false]);
 const Value4 = firstEleO([1 ,5 , 4]);
 console.log(Value2.toUpperCase())

 // 11 : Imports and Exports