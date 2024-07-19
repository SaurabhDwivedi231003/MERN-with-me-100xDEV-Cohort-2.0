"use strict";
// Basic Types in TypeScript
// Problem 1 : How to give types to argument of a function.
// Solution : Use type annotation.
// for javaScript look a.js file.
//-------TypeScript
function greet(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}
greet("Saurabh", "Dwivedi");
// Problem 2 : Create a sum fuction to add two numbers, thing to learn is to give return type to a function.
function sum(a, b) {
    return a + b;
}
let value = sum(4, 6);
console.log(value);
// Problem 3 : return true or false based on if user is 18+.
function checkAge(age) {
    return age >= 18;
}
let result = checkAge(20);
console.log(result);
// CallBacks
// problem 4 : creat function that take another function as an input and runs it afterb1 second.
function runAfter(fn) {
    setTimeout(fn, 1000);
}
runAfter(function () {
    console.log("inside function");
    return 10;
});
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
console.log(isLegal({
    firstName: "saurabh",
    lastName: "dwivedi",
    age: 19
}));
function greeting(id) {
    console.log(id);
}
greeting(1);
greeting("1");
const t = {
    name: "Seenu",
    startDate: new Date(),
    department: "absdewf"
};
console.log(t);
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 4, 9]));
function deSomething(keyPressed) {
}
deSomething("up");
deSomething("down");
deSomething("left");
deSomething("right");
//deSomething("someRandomKey");  // we can see compiler itself is telling it it wrong inout.
// SOLUTION 2 : ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3     default
})(Direction || (Direction = {}));
function doSomethingMore(keyPressed) {
}
doSomethingMore(Direction.Up);
doSomethingMore(Direction.Down);
doSomethingMore(Direction.Right);
doSomethingMore(Direction.Left);
console.log(Direction.Left);
function firstEle(arr) {
    return arr[0];
}
const ValueOne = firstEle(["saurabh", "dwivedi"]);
// console.log(ValueOne.toUpperCase());  // Problem 1 : is that the valueOne can be string as well as number, toUpperCase is only for string.
// saurabh.toUpperCase = SAURABH
// 245.toUpperCase = invalid
//Problem 2 : also we don't want mixed input : firsEle[1,3,6, "Saurabh" , 5, "seenu"] this is also a problem.
// ------------------
// Solution : GENERICS
//---------Example-------------
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(1230);
// This means we have created function that accepts multiple types
console.log(output1.toUpperCase());
//------------Original Problem solution
function firstEleO(arr) {
    return arr[0];
}
const ValueO = firstEleO(["saurabh", "dwivedi"]); // OR below one
const Value2 = firstEleO(["saurabh", "dwivedi"]);
console.log(Value2.toUpperCase());
