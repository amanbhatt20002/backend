import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./db/db.js";




dotenv.config({
    path:'./env'
})

connectDb()





