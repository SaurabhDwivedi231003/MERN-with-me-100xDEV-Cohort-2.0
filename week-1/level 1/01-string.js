// // String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// // split(), trim(), toUpperCase(), toLowerCase(), etc.

// // Run each function to see the output, play and learn by doing.

// function getLength(str)
// {
//     console.log("Original string :" , str);
//     console.log("Length :" , str.length);
// }
// getLength("Hello SEEnU");

// // indexOf
// function findIndexOf(str , target){
//     console.log("Original string :" , str);
//     console.log("Index " , str.indexOf(target));
// }
// findIndexOf("Hello SEEnU" , "SEEnU");

// // lastIndexOf
// function lastIndexOf(str , target){
//     console.log("Original string :" , str);
//     console.log("Index " , str.lastIndexOf(target));
// }
// lastIndexOf("Hello SEEnU SEEnU" , "SEEnU");

// // Slice : Dont include last index (2 aur 2 k beech ka return krega)
//  function getSlice(str , start ,end){
//      console.log("Original string :" , str);
//      console.log("Index " , str.slice(start , end));
//  }
//  getSlice("Hello SEEnU" , 2 , 5);


// SubString : eg. 12th index se start karo aur 16 length ki string do
// function getSubstring(str , start ,end){
//     console.log("Original string :" , str);
//     console.log("Index " , str.substr(start , end));
// }
// getSubstring("Hello SEEnU" , 2 , 5);

//  replace
// function replaceString(str , target , replacement){
//     console.log("Original string :" , str);
//     console.log("After Replacement :" , str.replace(target , replacement));
// }
// replaceString("Hello SEEnU" , "SEEnU" , "SAURABH");

//split
// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hello World", "W");
  
//trim : Remove extra space
// function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After split:", str.trim());
//   }
//   trimString(" Hello World     ");
  
// toUpperCase
// function toUpper(str) {
//     console.log("Original String:", str);
//     console.log("After toUpperCase:", str.toUpperCase());
//   }
//   toUpper("Hello World");
  
//   // toLowerCase
//   function toLower(str) {
//     console.log("Original String:", str);
//     console.log("After toLowerCase:", str.toLowerCase());
//   }
//   toLower("Hello World");
  

// Login for slice function.
// function cutIt(str , startIndex , endIndex)
// {
//     let newStr = "";
//     for(let i = 0; i<str.length; i++)
//     {
//         if(i>=startIndex && i<endIndex)
//         {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// console.log(cutIt("HELLO MOTTO" , 2 ,5));