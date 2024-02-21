// Chapter: Middleware , actual middleware is in 3.2index.js

// Middleware is a function that has access to the request object (req), the response object (res), 
// and the next function in the application’s request-response cycle. The next function is a function 
// in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Import the express module
const express = require('express');

// Initialize an express application
const app = express();

//API TEST :  http://localhost:3000/health-checkup?kidneyid=1 , also add headers 'username' and 'password' in the request.
app.get("/" , function(req , res){
    // Send a JSON response with a message
    res.json({msg : "Hey Im In"})
    // Log a message to the console
    console.log("working fine")
})

// Define a GET route for "/health-checkup"
// This function will be called when a GET request is made to "/health-checkup"
app.get("/health-checkup" , function(req , res){
    // Extract the username and password from the request headers
    const username =  req.headers.username;
    const password =  req.headers.password;
    // Extract the kidneyid from the query parameters
    const kidneyid =  req.query.kidneyid;

    // Validate the username and password
    if(username != 'saurabh' || password != 'pass'){
        // If the validation fails, send a 400 status code and a JSON response with an error message
        res.status(400).json({"msg" : "something wrong with your inputs" })
        return 
    }
    // Validate the kidneyid
    if(kidneyid != 1 && kidneyid !=2){
        // If the validation fails, send a 400 status code and a JSON response with an error message
        res.status(400).json({"msg" : "something wrong with your inputs" })
        return
    }

    // If all validations pass, send a 404 status code and a JSON response with a success message
    res.status(404).json({
        msg : "Your kidney is fine !"
    });
})

// IMPORTANT: Middleware can also be used to chain multiple functions for a single route.
// The following code is commented out, but it shows how you can define multiple middleware functions for a single route.
// Each function calls `next()` to pass control to the next middleware function. The last function sends a response to the client, so it does not need to call `next()`.

/*
app.get("/health-checkup" , function func1(req , res , next){
    console.log("inside function1")
    next();
} ,function func2(req , res , next){
    console.log("inside function2")
    next();
} , function func3(req , res){
    console.log("inside function3")
    res.json({msg : "Your kidney is fine !"})
} )
*/


app.listen(3000, function () {
    console.log(`App listening on port 3000`);  
});

// EXTRA INFO : 
// rate limiting middleware
// this middleware will be called for every request , it will check if the user has made more than 5 requests in the last 10 seconds ,
// logics like these can be implemented in middleware.

// Go toindex2.js for exapmle of middleware.