
const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true},
   role:{type:String,enum:["admin","user"]},
   profileimage:{type:String},
   createAt:{type:Date,default:Date.now},
   updateAt:{type:Date,default:Date.now}
})


const User=mongoose.model("user",userschema)
export default User






