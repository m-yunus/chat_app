import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { connectDB } from  "./config/db.js";

dotenv.config()

const app=express();
const port=process.env.PORT || 8513;

connectDB()
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})