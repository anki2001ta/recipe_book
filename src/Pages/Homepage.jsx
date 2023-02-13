
import React from 'react'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const userData=useSelector((store)=>store.AuthReducer.userData)
    console.log(userData)
  return (
    <div>
        Homepage
      
        {/* <Navbar/> */}
        {/* <Signup/> */}
    </div>
  )
}

export default Homepage