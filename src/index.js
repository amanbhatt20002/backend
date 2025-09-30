import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`erver is running on porrt :${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!!", err);
    
})





