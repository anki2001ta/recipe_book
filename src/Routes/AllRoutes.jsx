import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../Pages/Homepage';
import Singlepage from '../Pages/Singlepage';
import Login from '../Validation/Login';
import Signup from '../Validation/Signup';

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Homepage/>}/> 
            <Route path="/register" element={<Login/>}/>
            <Route path="/login" element={<Signup/>}/>
            <Route path="/singlepage" element={<Singlepage/>}/>
            

        </Routes>  
    </div>
  )
}

export default AllRoutes