const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://saurabhdwivedi2310:100xDEV@cluster0.edlhnt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here 
    title: String,
    price: Number,
    description: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
