
//Assignement : find avg time your server is taking to respond to a request.

const express = require('express');
const app = express();

let totalResponseTime = 0;
let requestCount = 0;


function calculateTime(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        totalResponseTime += duration;
        requestCount++;
        const avgResponseTime = totalResponseTime / requestCount;
        console.log(`Response time: ${duration}ms, Average response time: ${avgResponseTime}ms`);
    });
    next();  // proceed to next function this one completes successfully   
}

app.use(calculateTime);
app.get("/health-checkup", function (req, res) {
    res.json({ msg: "Hey Im Inside GET request" })
}); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// 