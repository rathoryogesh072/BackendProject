import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    console.log("connection string")
    console.log(process.env.MONGODB_URI)
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection error",error);
        throw error
    }
}

export default connectDB;