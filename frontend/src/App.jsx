import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './component/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authProvider'



 function App() {
    const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
          

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Course' element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
          </Routes>
           <Toaster />

    </>
  )
}


export default App




