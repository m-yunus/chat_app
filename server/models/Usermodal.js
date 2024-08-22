import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

 const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  color:{
    type:Number,
    required:false
  },
  profileSetup:{
    type:Boolean,
    required:false,
    default:false
  }
});

UserSchema.pre("save",async function(next){
    const salt=await genSalt()
    this.password=await hash(this.password,salt);
    next();
})

const User =mongoose.model("rac_users",UserSchema)

export default User