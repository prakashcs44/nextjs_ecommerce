import mongoose from "mongoose";

export const connectToDb =  ()=>{
   
    return mongoose.connect(process.env.MONGODB_CONNECTION_STRING!);
   
}