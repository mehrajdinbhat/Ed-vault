import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

 

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
 
  const onSubmit = async (data) =>{
    const userinfo={
      email:data.email,
      password:data.password, 
    }
    await axios.post("http://localhost:4001/user/login",userinfo)
    .then((res)=>{
      console.log(res.data)
          if(res.data){
                        
            toast.success("login  succesfull")
            document.getElementById("my_modal_3").close()
            window.location.reload;
            localStorage.setItem("Users",JSON.stringify(res.data.user))
                      
                        
          }
           
    }).catch((err)=>{
      if(err.response){
         console.log(err)
                  toast.error("error:",err.response.data.message) 
      }
     
    })
  }
  
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    {/* <form  method="dialog"> */}
   <form  onSubmit={handleSubmit(onSubmit)} method='dialog'>

      {/* if there is a button in form, it will close the modal */}
            <Link to='/ ' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}
            >
              ✕
              </Link>
   {/* </form> */}
    <h3 className="font-bold text-lg">Login</h3> 
        
        {/* email */}

      <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder="Enter your email"
        className='w-80 px-3 py-1 border rounded-md outline-none ' 
        {...register("email", { required: true })} 
        /> <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

      </div>
      {/* password */}
      <div className='mt-4 space-y-2'>
        <span>Password</span><br />
        <input type="password" placeholder="Enter your Password"
        className='w-80 px-3 py-1 border rounded-md outline-none '
        {...register("password", { required: true })} 
         />  <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

      </div>
      {/* button */}
      <div className='flex justify-between mt-4 '>
        <button type='submit' className='btn bg-pink-500 text-white rounded-md px-3 py-1 hoverr:bg-pink-700 duration-200'>Login</button>
       <p> Not registerd {" "}
        <Link to="/signup"className='underline text-blue-500 curor-pointer'>
        Siginup
        </Link>{" "}
        </p>
      </div>
      </form>
  </div>
</dialog>
    </div>
  )
}

export default Login;
