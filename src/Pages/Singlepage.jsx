import React from 'react'

const Singlepage = () => {
const data = JSON.parse(localStorage.getItem("Datas"))
console.log(data,"data")
  return (
    <div>Singlepage</div>
  )
}

export default Singlepage