import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../Pages/Homepage';
import Login from '../Validation/Login';
import Signup from '../Validation/Signup';

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Homepage/>}/> 
            <Route path="/register" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            

          
           
         </Routes>
    </div>
  )
}

export default AllRoutes