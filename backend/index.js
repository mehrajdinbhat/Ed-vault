import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express()

import cors from "cors";
app.use(express.json());

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.Mongo_URI;

console.log("DEBUG MONGO_URI:", URI)
// connect to mongodb;
try {
  mongoose.connect(process.env.Mongo_URI,{
    useNewurlParser:true,
    useUnifiedTopology:true
  })
  console.log("connected to mongodb mehraj")

  
} catch (error) {
  
}

// defining routes;
app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`)
})
