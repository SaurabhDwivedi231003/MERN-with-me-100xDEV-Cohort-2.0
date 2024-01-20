const express = require('express');

const app = express();

const port = 3000;

app.get('/' , function(req ,res){
    res.send("Hello Motto!");
})

app.listen(port , function(){
    console.log(`App listening on port ${port}`);
})  

