const express = require('express');

const app = express();

// Use the built-in JSON middleware in Express to parse incoming JSON payloads
app.use(express.json());

// Define a middleware function to validate the input of the request
function validateInput(req, res, next) {
    // Extract the 'kidneys' property from the request body
    const kidneys = req.body.kidneys;

    // If 'kidneys' is not an array, respond with a 400 status code and a message 'Invalid input'
    if (!Array.isArray(kidneys)) {
        return res.status(400).send('Invalid input');
    }

    // Calculate the length of the 'kidneys' array
    const kidneyLength = kidneys.length;

    // Respond with a message indicating the number of kidneys
    res.send(`You have ${kidneyLength} kidneys`);

    // Call the next middleware function in the stack
    next(); 
}

// Use the 'validateInput' middleware for POST requests to the '/health-checkup' endpoint
app.post('/health-checkup', validateInput);

// Define a global error handling middleware
app.use((err, req, res, next) => {
    // If an error occurred, respond with a 500 status code and a message 'Something went wrong'
    if (err) {
        res.status(500).send('Something went wrong');
    }
});

// Start the server and listen for requests on port 3000
app.listen(3000, () => {
    console.log(`Server listening at 3000`);
});


// NOTE: The 'validateInput' middleware is used to validate the input of the POST request.
// If the input is not validated, the server may crash and expose error messages to the user, which can be a security risk.

// Therefore, we use the 'validateInput' middleware to validate the input.
// If the input is not an array, the middleware will send a 400 status code and a message 'Invalid input'.
// Without the 'validateInput' middleware, the server would crash if the input is not an array.

// If you provide incorrect input with the 'validateInput' middleware, it will result in an error.
// This error message can be previewed in Thunder Client or any other API testing tool.
// Be aware that exposing such error messages can be a security risk for the web application.

// Here's an example of a valid input in the body of a POST request:
// {
//   "kidneys": [1, 2, 5]
// }

// continue from : 01:08:20