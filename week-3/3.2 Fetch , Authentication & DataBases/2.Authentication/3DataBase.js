const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt_password =  "123456";

dotenv.config();
const MONGO = process.env.MONGO;
mongoose.connect(MONGO);

const UserSchema = new mongoose.Schema({ 
    name : String,
    email : String,
    password : String
});

const UserModel = mongoose.model('User', UserSchema);

app.use(express.json());

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    var token = jwt.sign({email: email} , jwt_password);
    res.status(200).json({ token: token, message: "User signed in successfully" });
});

app.listen(3000, () => console.log('Server started on port 3000'));