import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(
    () =>{
        console.log("db connection successful");
    })
    .catch((err) =>{
        console.log(err);
    })


const app = express()

app.get("/" , (req , res) =>{
    return res.send("Hello")
})

app.listen(3000 , ()=>{
    console.log('server is running on port 3000!');
})

