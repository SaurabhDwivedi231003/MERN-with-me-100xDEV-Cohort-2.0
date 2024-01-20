//Remote file getter : my own one drive

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/:filename', (req, res) => {
        const name = req.params.filename;

        fs.readFile(name , "utf-8" , function(err , data){
            res.json({data});
        })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
