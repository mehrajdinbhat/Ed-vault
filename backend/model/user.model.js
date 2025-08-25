import mongose from "mongoose";
const userSchema=mongose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
})
    const User=mongose.model("User",userSchema)
export default User;