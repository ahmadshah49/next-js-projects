import { NextResponse } from "next/server";
import connectDB from "@/app/db";
import User from "@/app/models/user";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { Jwt } from "jsonwebtoken";

connectDB();
export const POST=async (req,route)=>{
    if(req.method === "POST"){
 const  {name , email , password} = await req.json();
 if(!name || !email || !password ){
    return NextResponse.json({message:"All Fields are Mandatory !"})
 }
 const emailExists =await User.findOne({email});
 if(emailExists){
    return NextResponse.json({message:"User Already Registered !"})
 }
const hashedPassword =await bcrypt.hash(password,10);
 const newUser =new User({
    name:name,
    email:email,
    password:hashedPassword,
 });
 const result=await newUser.save();
 const token = sign({token:result._id},'Ahmad Raza',{exiresIn:"30d"});
   // return  res.status(201).json({msg:"User Is Registered",token, user:result})
   return NextResponse.json({ message: "User Is Registered", token, user: result });

}
}