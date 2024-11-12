import dotenv from "dotenv"
import connectDB from "./db/Database.js";

dotenv.config({
  path:"./env"
})

connectDB()