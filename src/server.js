import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import { connectDB } from "./db/database.js";
import dotenv from "dotenv";

dotenv.config({
  path:'./env'
})

connectDB();
































/*
const app = express();

// conneting MongoDB Databse
( async ()=>{
try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on("error", (error)=>{
    console.log("ERROR: ", error);
    throw error
  })
  app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
  })
} catch (error) {
  console.error("ERROR: ", error)
  throw error
}
})()

*/