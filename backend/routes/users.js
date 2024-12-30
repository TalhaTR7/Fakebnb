import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        console.log("Fetching data from MongoDB");
        res.send("Fetching data from MongoDB res");
    }
    catch (err) {
        console.log("Error encountered :", err);
        res.json({ 'Error': 'Could not fetch data from MongoDB' });
    }
});


router.post('/signup', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 'Error': 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log("User created");
        res.status(201).json({ newUser });
    }
    catch (err) {
        console.log("Error encountered :", err);
        res.json({ 'Error': 'Could not save user to MongoDB' });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ 'Error': 'User does not exist' });
        }

        const comparison = await bcrypt.comparePassword(password, user.password);
        if (!comparison) {
            return res.status(400).json({ 'Error': 'Invalid credentials' });
        }

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    }
    catch (error) {
        console.log("Error encountered :", err);
        res.status(400).json({ 'Error': 'User does not exist' });
    }
})


export default router;