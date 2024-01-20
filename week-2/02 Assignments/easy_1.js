// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// function updateTimer()
// {
//     let time = new Date();
//     console.log((time.getHours()-12) + ":" + time.getMinutes()+ ":" + time.getSeconds());
// }

// setInterval(updateTimer , 1000);

//===========================================================================================
// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.

// let counter = 0;
// function updateCounter(){
//     counter++;
//     console.log(counter);
    
//     setTimeout(updateCounter , 500);
// }
// updateCounter();

//============================================================================================

// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// const fs = require("fs");

// function readFileAndPrint(){
//     performExpensiveOperation();

//     fs.readFile("a1.txt" , "utf-8" , (err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log(data);
//     });
// }

// function performExpensiveOperation(){
//     for(let i=0; i<=0; i++)
//     {
//         console.log(i);
//     }
//     console.log(" Expensive operation completed! ")
// }

// readFileAndPrint();

//======================================================

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require("fs");
const content = "SAURABH HAS ADDED SOME CONTENT IN THE FILE !";


function writeFileAndPrint(fileName , content) {

    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(`content has been added to the file , check file : ${fileName}`);
    });
}

writeFileAndPrint("a1.txt" , content);