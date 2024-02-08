// Chapter: Middleware
e
const express = require('express');
const app = express();

// Define a variable to keep track of the number of requests
let noofrequests = 0;

// Define a middleware function to calculate the number of requests
function calculateRequests(req, res, next) {
    noofrequests++;
    console.log(noofrequests)
    // Call the next middleware function
    next();
}

// IMPORTANT: Middleware can be applied to specific routes as shown in the commented code below.
// In this case, the `calculateRequests` middleware function is applied to the "/health-checkup" route for both GET and POST requests.

/*
app.get("/health-checkup" , calculateRequests, function(req , res){
    res.json({msg : "Hey Im In"})
});

app.post("/health-checkup" , calculateRequests, function(req , res){
    res.json({msg : "Hey Im In"})
});
*/

// However, if we want to apply the middleware function to all routes, we can use `app.use()`.
// The `app.use(calculateRequests)` line applies the `calculateRequests` middleware function to all routes.

// Apply the `calculateRequests` middleware function to all routes
app.use(calculateRequests);
// app.use(express.json());   // express.json(): This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

// Define a GET route for "/health-checkup"
app.get("/health-checkup" , function(req , res){
    res.json({msg : "Hey Im Inside GET request"})
});

// Define a POST route for "/health-checkup"
app.post("/health-checkup" , function(req , res){
    res.json({msg : "Hey Im Inside post request"})
});

// Start the application on port 3000
app.listen(3000, () => {
    // Log a message to the console
    console.log('Server is running on port 3000');
});