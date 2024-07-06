import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    minLength:8,
    select:false
   },
   registerMethod:{
    type:String,
    required:true,
    enum:["google","github","credentials"]
   }

})


const UserModel = mongoose.models?.User|| mongoose.model("User",userSchema);
export default UserModel;