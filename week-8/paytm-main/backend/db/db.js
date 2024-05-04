const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saurabhdwivedi2310:paytm8839532509@cluster0.dzmnxdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// Simple schema:

// const userSchema = new mongoose.Schema({
//     username: String,
//     firstName: String,
//     lastName: String,
//     password: String 
// });

// Expert Solution

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true ,
        trim : true,
        lowercase : true,
        minlength : 3 ,
        maxlenth : 30 ,
    },
    password : {
        type : String ,
        required : true ,
        minlength : 6,
    },
    firstName : {
        type : String ,
        required : true ,
        trim : true,
        lowercase : true,
        minlength : 3 ,
        maxlenth : 30 ,
    },  
    lastName : {
        type : String ,
        required : true ,
        trim : true,
        lowercase : true,
        minlength : 3 ,
        maxlenth : 30 ,
    }
    });

const acountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' ,   // like foreign key in SQL that this depends on User
        required : true
    },

    balance : {
        type: Number,
        required: true
    }
});


const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', acountSchema);

module.exports = {
    User , Account
};