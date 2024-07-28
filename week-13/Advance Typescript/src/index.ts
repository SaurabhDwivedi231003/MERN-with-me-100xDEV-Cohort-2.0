// https://projects.100xdevs.com/tracks/ts-hard/ts-hard-1

// interface User{
//     name : string,
//     age : number
// };

// function sumOfAge( user1 : User , user2: User){
//     return user1.age + user2.age;
// }

// const countAge = sumOfAge({name: 'Alice', age: 25}, {name: 'Bob', age: 30});
// console.log(countAge);

// 1 : Pick
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
// }
 
// // For a profile display, only pick `name` and `email`
// type UserProfile = Pick<User, 'name' | 'email'>;

// const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
// };

// // function call 
// const user: UserProfile = {
//     name: 'Alice',
//     email: 'alice@example.com'
// };
// displayUserProfile(user);

// 2 : Partial
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional. 
// Specifically useful when you want to do updates

// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({
//     name : "saurabh"
// })
 
// 3 : Readonly
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
//   }
  
//   const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
//   };
  
//  config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
//  Hum isse change ni kr skte jaise normal javascript object ko krdete the.
//  example
// const obj = {
//         name : "saurabh",
//         email: "sau@gmail.com"
// }
// obj.name = "seenu";
// // but ye typescript allow ni krega agr readonly property use kroge because this is strict in typescript.


// 4 : Record and Map
// Record
// Record let’s you give a cleaner type to objects
// You can type objects like follows - 

//Example: 1
// type UserAge = {
//         [key : string] : number   // neeche saurabh naam k user h usme saurabh ka naam string h uska age number h.
// }
// const user : UserAge = {
//         "saurabh" : 11,
//         "seenu" : 22
// }

// Example: 2
// interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = { [key: string]: User };
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };

// above is not a cleaner way.

// 4: RECORDS : cleaner syntax.
// interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = Record<string, User>; // much cleaner syntax than :  type Users = { [key: string]: User };
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };
  
//   console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// 5 :  Map  :  javascript syntax
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++.
// interface User {
//     id: string;
//     name: string;
//   }
  
//   // Initialize an empty Map
//   const usersMap = new Map<string, User>();
  
//   // Add users to the map using .set
//   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
//   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
//   // Accessing a value using .get
//   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }



// 6 : Exclude
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

// type Event = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK


// 7 : Type inference in zod
// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information

// import { z } from 'zod';
// import express from "express";

// const app = express();

// // Define the schema for profile update
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// // type updateType = {
// //     name : string,
// //     email : string,
// //     age :  number
// // }
// // better way 
// type updateType = z.infer<typeof userProfileSchema>  // yaha hymne naya define na krke 
//                                                     //  existing zod wala type he bna diya ab udhr change hua tih automatically idhr bhi hoga no need to repeat code

// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody : updateType = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });

// app.listen(3000);