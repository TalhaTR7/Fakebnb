import express from 'express'
import User from '../models/User.js'

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        console.log("Fetching data from MongoDB");
        res.send("Fetching data from MongoDB res");
    }
    catch (err) {
        console.log("Error encountered :", err);
        res.json({'Error' : 'Could not fetch data from MongoDB'});
    }
});


router.post('/signup', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        console.log("Request body :", req.body);
        const newUser = new User({ firstname, lastname, email, password });
        await newUser.save();
        res.json(newUser);
    }
    catch (err) {
        console.log("Error encountered :", err);
        res.json({'Error' : 'Could not save user to MongoDB'});
    }
});


export default router;