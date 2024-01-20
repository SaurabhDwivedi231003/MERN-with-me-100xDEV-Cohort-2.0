
// const users = ' { "name" : "SAURABH" , "age" : 24 , "gender" : "male"} '; // Ye ek string h object nahi

// console.log(users.name);   // will not work kuuki wo string data h jo hume server se mil rhi aur hume data type nahi pta issiliye parse kro phle
// console.log(users["name"]); // same 


// PARSE 

// const user = JSON.parse(users);
// console.log(user["name"]);  // Here it will work kuuki ab data parse krdiya
// console.log(user.name); // same
// console.log(`${user.name} ${user.age}`); // same

// STRINGify
// const customers = { "name" : "SAURABH" , "age" : 24 , "gender" : "male"};
// const customer = JSON.stringify(customers); // Ye JSON/string format me dega 
// console.log(customers);   // ye as it is print dedeha

