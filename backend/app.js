import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import propertyRoutes from './routes/properties.js'
import userRoute from './routes/users.js'

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error encountered :", err));

app.use("/api", propertyRoutes);
app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})