const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const jwt_password = "123456";

app.use(express.json());

// In memory database
const ALL_USERS = [
    {
      email: 'admin@gmail.com',
      username: 'admin',
      password: '12345'
    },
    {
      email: 'test1@gmail.com',
      username: 'test1',
      password: '1234'
    },
    {
      email: 'test2@gmail.com',
      username: 'test2',
      password: '123'
    },
    {
        email : "iam@gmail.com",
        username: "seenu" , 
        password : "sd55a",
      }
];

function userExist(email , password){
    // return ALL_USERS.find(user => user.email === email && user.password === password); // use this one , but to know logic go below

    let userExists = false;
    for(let i = 0 ; i < ALL_USERS.length ; i++){
        if(ALL_USERS[i].email === email && ALL_USERS[i].password === password){
            userExists = true;
            break;
        }
    }
    return userExists;
}

// take the token generated and verify it on site //  jwt.io

app.get('/signin' , (req , res)=>{
    const {email , password} = req.body;

    if(!userExist(email , password))
    {
        res.status(400).json({message: "User do not exist in the db"});
    }
    var token = jwt.sign({email: email} , jwt_password);
    return res.status(200).json({token: token});
})    

app.post('user' , (req , res)=>{
   
    const token = req.headers.authorization;
    const decode = jwt.verify(token , jwt_password);
    const email = decoded.email;   
    
    res.json({
          users : ALL_USERS.filter(function(value){
            if(value.email === email){
              return false;
            }
            else{
              return true;
            }
          })
    })
});

app.listen(3000, () => console.log('Server started on port 3000'));

// from 1:12:00
