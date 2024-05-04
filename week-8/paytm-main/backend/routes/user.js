// user.js
const express = require('express');
const router = express.Router();
const {JWT_SECRET} = require("../config");
const { User ,Account } = require("../db/db");
const { authMiddleware } = require("../middleware/middleware");
const jwt = require("jsonwebtoken");
const zod = require("zod");

// ZOD is for end user input

//---------------------SIGNUP-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for ZOD 
const signupSchema = zod.object({
   username : zod.string(),
   password : zod.string(),
   firstName : zod.string(), 
   lastName : zod.string(),
});

router.post('/signup' ,async (req , res)=>{
     const body = req.body;                                          //acces from body
     const {success} = signupSchema.safeParse(body);                 //parse the body safely using zod

     if(!success){                                                   //if not success
         return res.status(400).json({
             msg : "Invalid data !"
         })
     }

     const user  = User.findOne({username : body.username});         //for checking if user already exis 
     if(user._id){                                                    // id exist
      return res.status(400).json({
         msg : "User already exist !"
      })
     }                                                               
                                                                     //if user not exist
     const dbUser = await User.create({                               //create user in db
         username : body.username,
         password : body.password,
         firstName : body.firstName,
         lastName : body.lastName
     });          

     const userId = dbUser._id;                                             //get user id
     const token = jwt.sign({userId} , JWT_SECRET);                    //create token

     await Account.create({
      userId ,
      balance : 1 + Math.random() * 10000
     })

     res.json({
      message : "User created successfully !",                    //send message
      token
         })                                                       //send token
   });

//---------------------SIGNIN-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For ZOD
const signiBody = zod.object({
   username : zod.string(),
   password : zod.string(),
});


router.post('/signin' ,async (req , res)=>{
   const {success} = signiBody.safeParse(req.body);               //parse the body safely using zod
   if(!success){
      return res.status(400).json({
          msg : "Invalid data !"
      })
   }

   const user = await User.findOne({
      username : req.body.username,
      password : req.body.password 
    });

   if(user){
      const token =  jwt.sign({userId : user._id} , JWT_SECRET);
      res.json({ totken : token })
      return;
   } 
   res.status(411).json({ 
      message : "Error while logging in !"
   })
})

//---------------------Update-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For ZOD
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.put("/" , authMiddleware , async (req , res)=>{ 
      const { success } = updateBody.safeParse(req.body);
      if(!success){
         return res.status(400).json({
            msg : "Error while updtating information !"
         })
      }
      await User.updateOne({ id : req.userId });
      res.json({ message: "User updated successfully !" });
 });

//---Important : One user can Search other by firstName or lastName ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// we are going to write important query here
// example in SQL : SELECT * FROM User WHERE firstName = 'John' OR lastName = 'Doe';
// StackOverflow  : https://stackoverflow.com/questions/7382207/mongooses-find-method-with-or-condition-does-not-work-properly

router.get("/bulk" ,async (req , res)=>{  
    // This line retrieves the 'filter' query parameter from the request. 
   // If 'filter' is not provided, it defaults to an empty string.
   const filter = req.query.filter || "";
   
   // This line queries the MongoDB database for users whose 'firstName' or 'lastName' 
   // matches the 'filter' string. The '$or' operator is used to specify conditions 
   // that can satisfy the query. The '$regex' operator allows the filter to match 
   // any part of the 'firstName' or 'lastName' fields.
   const users = await User.find({
      $or: [{
          firstName: {
              "$regex": filter
          }
      }, {
          lastName: {
              "$regex": filter
          }
      }]
})

   // This line sends a JSON response to the client. The response contains an array 
   // of users. Each user object in the array includes the 'username', 'firstName', 
   // 'lastName', and '_id' properties. The 'map' function is used to transform 
   // the 'users' array into the desired format
   
res.json({
    users : users.map(user => ({
      username : user.username,
      firstName : user.firstName,
      lastName : user.lastName,
      _id : user._id
    }))
})
});



module.exports = router;