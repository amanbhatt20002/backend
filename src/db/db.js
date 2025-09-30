import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";


const connectDb= async()=>{
    try {
       const connectionTnstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Mongodb connected !! DB HOST ${connectionTnstance}`);
       
        
    } catch (error) {
        console.log("mongo error :",error);
        process.exit(1)
        
        
    }
}


export default  connectDb