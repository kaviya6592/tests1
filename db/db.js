import mongoose from "mongoose"


const mongoose = require("mongoose");



const connectDB=async()=>{

   try{
       const conn = await  mongoose.connect("mongodb+srv://emp:123@cluster0.hefmtzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
       
       console.log("Connection is successful");
    }
    catch(error){
        console.error("Connection error:", err);
    };
    
    
    
    
   

}

module.exports=connectDB;