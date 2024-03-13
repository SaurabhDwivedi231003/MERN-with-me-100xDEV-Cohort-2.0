
const mongoose = require('mongoose');   


mongoose.connect('mongodb+srv://saurabhdwivedi2310:TODOXSAURABH@todo-app.u81exja.mongodb.net/?retryWrites=true&w=majority&appName=todo-app')

const todoSchema =  new mongoose.Schema({
    title : String ,
    description : String ,
    completed : {
        type : Boolean,
        default : false
    }
});

const todo = mongoose.model('todo', todoSchema);
module.exports ={ 
    todo
 };
 