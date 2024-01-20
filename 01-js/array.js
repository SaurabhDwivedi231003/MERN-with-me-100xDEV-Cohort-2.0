// Array

// const Array = [ 23 , 15 , 45 ,89];
// for(let i = 0; i<Array.length; i++){
//     console.log(Array[i]);
// }

// Array of Objects 

// const ob1 = { firstName : "SAURABH" , lastName : "Dwivedi" }
// const ob2 = { firstName : "Gullu" , lastName : "mishra" }
// const ob3 = { firstName : "Bannu" , lastName : "bhardwaj" }

// console.log(ob1)
// console.log(ob1.firstName);
// console.log(ob1.lastName);


const arrayOfObject = [
     { firstName : "SAURABH" , lastName : "Dwivedi" , gender : "male" } , 
     { firstName : "Gullu" , lastName : "mishra" , gender : "female" } ,
     { firstName : "Bannu" , lastName : "bhardwaj" , gender : "female"}
];

for(let i = 0; i<arrayOfObject.length; i++)
{
    console.log(arrayOfObject[i].firstName + " " + arrayOfObject[i].lastName);

    if(arrayOfObject[i]["gender"] == "male")
    {
         console.log(" He is a Male. "); 
    }
    else
    { 
        console.log("She is a Female.")
    }
}
