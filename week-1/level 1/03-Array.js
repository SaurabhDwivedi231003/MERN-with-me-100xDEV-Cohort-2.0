// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// PUSH
 function pushExample(arr, element)
 {
     console.log("Original Array : " , arr);

     arr.push(element);
     console.log("After Push : " , arr);
 }
 pushExample([1,2,3] , 4);

// pop
 function popExample(arr, element)
 {
     console.log("Original Array : " , arr);

     arr.pop(element);
     console.log("After pop : " , arr);
 }
 popExample([1,2,3,4] , 4);

//Shift
 function shiftExample(arr) {
     console.log("Original Array:", arr);
  
     arr.shift();
     console.log("After shift:", arr);
   }
   shiftExample([1, 2, 3]);

// Unshift
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);

    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 5);

// Concat
 function concatExample(arr1, arr2) {
      console.log("Original Array : " , arr1 , arr2);
      let arr3 = arr1.concat(arr2);
      console.log("After Conatination : " , arr3);
 }
 concatExample([1,2,3] ,[5,6,7]);

// ---- forEach : says give me fucntion and i will run it for each element of an array

// const initialArray = [ 1,2,3,4];
 function logThing(str){
     console.log(str);
 }
 // Both below are same but using forEach is better 
 initialArray.forEach(logThing);
 // OR
 logThing(1);
 logThing(2);
 logThing(3);
 logThing(4);


function forEachExample(arr)
{
    console.log("Original Array : " , arr);
    arr.forEach(function(item , index) {
        console.log(item , index);
    });
}  
forEachExample([ 7,8,9]);