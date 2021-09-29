const express=require("express");
const app=express()
const mongoose=require("mongoose");
dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser :true,
useUnifiedTopology:true,
useCreateIndex:true,


}).then (console.log ("mongo db connected sucesfully"))
.catch(err=>console.log(err));



app.listen("5000",()=>{
    consolele.log("backend is connected successfuly")
})