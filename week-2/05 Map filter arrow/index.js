//------ Map , filter , arrow fucntion --------

// Ques : // given an array [ 1,2,3,4,5];
// return new array with value of elements doubled : [2,4,6,8,10]

 const array = [1,2,3,4,5];
 const newArray1 = [];

 for(let i = 0; i<array.length; i++)
 {
     newArray1.push(array[i] * 2);
 }
 console.log(newArray1);

//========   map() : used to transform array ================


 function transform(i) {
     return i * 2;
 }
const ans2 = array.map(transform); // means working for every value of array.
console.log(ans2);

// // ---- Right way to map------

 const ans3 = array.map(function transform(i) {
     return i * 2;
 });
 console.log(ans3)


// =====================   FILTER  =================================

// Ques : // GIVE me all the even value from the array

 const array2 = [1, 2, 3, 4, 5];
 const newArray2 = [];

 for( let i = 0; i<array2.length; i++)
 {
     if(array[i] % 2 == 0) {
         newArray2.push(array2[i]);
     }
 }
 console.log(newArray2);


// ------BY FILTER--------

 function filterLogic(n){
     if(n%2 == 0) { return true; }
     else { return false; }
 }
 const ans4 = array2.filter(filterLogic);
 console.log(ans4);

//---------Right way to filter---------------


const ans = array.filter(function filterLogic(n){
    if(n%2 == 0) { return true; }
    else { return false; }
});
console.log(ans);

// more example

const arr = ["gullu" ,"seenu" , "saurabh" , "shubham" ,"sanskriti"];

const ans5 = arr.filter((n) => {
    if(n.startsWith("s")) return true;
    else return false;
});

console.log(ans5);


// ====== ARROW =======

const sum = (a ,b) => {
    return a+b;
}
console.log(sum(2,5));