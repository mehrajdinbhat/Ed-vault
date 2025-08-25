import React from 'react'
import { useAuth } from '../context/authProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authuser,setAuthUser]=useAuth();
    const handlelogout=()=>{
        try {
            setAuthUser({
                ...authuser,
                user:null,
            });
            localStorage.removeItem("Users");
            toast.success("logout successfully");
            window.location.reload();
        } catch (error) {
            toast.error("error:"+error.message)
        }
    }
  return (
    <div>
      <button className="px-3 bg-red-500 text-white rounded-md cursor-pointer" 
             onClick={handlelogout}
>
        Logout
      </button>
    </div>
  )
}

export default Logout
