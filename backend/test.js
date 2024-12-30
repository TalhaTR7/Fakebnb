import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const password = "lPk0EYUJyGCI7jS0"
const URI = `mongodb+srv://Talha:${password}@backend.ioszc.mongodb.net/?retryWrites=true&w=majority&appName=Backend`
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(URI);

console.log(URI);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})