const express = require('express');
const app = express();
const port = 3000;
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors =  require('cors');

//using ZOD to validate the request body , check file : types.js
app.use(express.json());
app.use(cors());

app.post('/todo' , async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        return res.status(400).json({ msg : "You sent wrong inputs "});
    }
    // put it in mongo
    await todo.create({
        title : createPayload.title, 
        description : createPayload.description,
        completed : false
    });  
    res.json({ msg : "Todo created successfully "})
    });   

app.get("/todos" , async (req, res) => {
    const todos = await todo.find({});
    res.json({ todos });
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        return res.status(400).json({ msg : "You sent wrong inputs "});
    }
    // update it in mongo
    await todo.update({
        _id : req.body.id
    },{
        completed : true 
    });
    res.json({ msg : "Todo updated successfully "})
})
  

app.listen(port, () => {
    console.log(`Server listening at port : ${port}`);
}); 

