import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({name }) => {
  const navigate=useNavigate();
  const backPage=()=>{
    navigate(-1);
  }
  return (
    <button type="button" className="myButton btn btn-primary mybtn" onClick={backPage} >{name}</button>
  )
}

export default Button