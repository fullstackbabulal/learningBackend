import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import { connectDB } from "./db/database.js";
//import dotenv from "dotenv";
import { app } from "./app.js";
//require('dotenv').config();
import 'dotenv/config';

/*dotenv.config({
  path:'./env'
})*/

const port = process.env.PORT;

connectDB()
.then(()=>{
  app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
  });
})
.catch((err)=>{
  console.log("MONGO DB CONNECTION FAILED !!", err);
})
































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