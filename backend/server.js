import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./models/book.model.js";
import router from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGO_URL;    
const app = express();

//Middleware to parse JSON
app.use(express.json());

//Middleware to enable CORS
app.use(cors());

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
        })
    }) .catch((error) => {
        console.log(error);
    })


//Routes
app.use('/api/books', router);