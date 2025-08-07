import User from "./models/admin_model"

import bcrypt from "bcrypt"
import connectDB from "./db/db"
const userRegister=async()=>{

    try{
        connectDB()

        const hashPassword=await bcrypt.hash("admin",10)
        const newuser=new User({
           name:"admin",
           email:"admin@gmail.com",
           password:hashPassword,
           role:"admin"


        })
        await newuser.save()
    }catch(error){
        console.log(error)
    }
}

userRegister();