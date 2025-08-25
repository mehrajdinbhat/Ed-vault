import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({mesage:"user already exists"})
           }
           const hashPassword= await bcrypt.hash(password,10)  
         const createUser=new User({
                fullname:fullname,
                email:email,
                password:hashPassword
            })
       await createUser.save()
       res.status(201).json({massege:"user created successfully",user:createUser})

    } catch (error) {
       console.log("error:",error.massege) 
       res.status(500).json({message:"internal server er"})
    }
};


export const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email})
        const isMatch= await bcrypt.compare(password,user.password)
        if(!user || isMatch){
            return res.status(400).json({message:"inviald credintial"})
        }
        else{
            res.status(200).json({message:"login succesfull",user:{
                _id:user.id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error:",error.mesage)
        res.status(500).json({message:"internal server error"})
    }
}