const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db/index.js');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    // Admin database me store karna hai after creating it.
    await Admin.create({
        username: username,
        password: password 
    })
    res.status(201).send("Admin created successfully");
}); 

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const { name, description,imageLink, price } = req.body;

    // In the real world use ZOD to validate the input
    const newCourse = await Course.create({
        name,
        description,
        imageLink,
        price
    })
    res.json({ 
        message: "Course created successfully",
        course: newCourse._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
    res.json({
        courses: response
    });

});

module.exports = router; 