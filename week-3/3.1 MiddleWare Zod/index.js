const express = require('express');

const app = express();

// MiddleWare : used for preChecks , 
// Two prechecks that any website does : User Authentication & Input validation.

app.get("/" , function(req , res){
    res.json({msg : "Hey Im In"})
    console.log("working fine")
})

app.get("/health-checkup" , function(req , res){
    const username =  req.headers.username;
    const password =  req.headers.password;
    const kidneyid =  req.query.kidneyid;

    if(username != 'saurabh' || password != 'pass'){
        res.status(400).json({"msg" : "something wrong with your inputs" })
        return 
    }
    if(kidneyid != 1 && kidneyid !=2){
        res.status(400).json({"msg" : "something wrong with your inputs" })
        return
    }

    res.status(404).json({
        msg : "Your kidney is fine !"
    });
})

app.listen(3000, function () {
    console.log(`App listening on port 3000`);  
});
