import React from 'react'
import { useNavigate } from 'react-router-dom';

const Browse = () => {
 const navigate = useNavigate();  
 const clickHandler = ()=>{
    localStorage.removeItem("email");
     navigate("/");
 }

  return (
    <div className='bg-red-600 w-screen h-screen'>
    <div className='text-4xl font-extrabold text-yellow-400 p-9'>Hello There, What's Next?</div>
    <button className='p-2 m-14 bg-neutral-900 text-fuchsia-600 rounded-lg font-bold' onClick={clickHandler}>Take Me Back!!</button>
    </div>
  )
}

export default Browse