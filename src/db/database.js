import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//import { MONGODB_URI } from "../constants.js";



export const connectDB = async () =>{
  try {
    //const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Error", error);
    process.exit(1)
  }
}


/*const connectDB = async () => {
  try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
      console.log("MONGODB connection FAILED ", error);
      process.exit(1)
  }
}

export default connectDB

*/