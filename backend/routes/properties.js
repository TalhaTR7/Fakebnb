import Property from '../models/Property.js'
import express from 'express'

const router = express.Router();

router.get('/properties', async (req, res) => {
    try {
        const Properties = await Property.find();
        res.json(Properties);
    }
    catch (err) {
        console.log("Error encountered :", err);
        res.json({'Error' : 'Could not fetch data from MongoDB'});
    }
});

export default router;