import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

const Browse = () => {
 /*
 const navigate = useNavigate();  
 const clickHandler = ()=>{
    localStorage.removeItem("email");
     navigate("/");
 }
*/
  const[buttonColor, setButtonColor] = useState(false);
  const[allTodo, setAllTodo] = useState([]);
  const[newDescription, setDescription] = useState("");
  const[newTitle, setTitle] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    }

    let updatedTodoArr = [...allTodo];
    updatedTodoArr.push(newTodoItem);
    setAllTodo(updatedTodoArr);

    localStorage.setItem("todoList", JSON.stringify(allTodo));
  }

  const handleDeleteToDo = (index) => {
      let reducedToDo = [...allTodo];
      reducedToDo.splice(index);
      localStorage.setItem('todoList', JSON.stringify(reducedToDo));
      setAllTodo(reducedToDo);  
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem("todoList"));
    if(savedTodo){
      setAllTodo(savedTodo);
    }
  },[]);
 

  return (
    <div className='text-white '>
      <h1 className='text-center font-extrabold mt-2 text-5xl text-black'>Task To Do</h1>
      <div className='ml-auto mr-auto p-[2%] w-fit bg-gray-800 my-[3%] max-h-[80vh] overflow-y-auto shadow-black'>
        <div className='flex items-center justify-center border-b-2 border-gray-400 pb-6 mb-6'>
          <div className='flex flex-col items-start mr-6'>
            <label className='font-bold mb-2'>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setTitle(e.target.value)}  placeholder="What's the task title?" className='p-2 w-72 text-black focus:border-2 focus:border-green-600 outline-none' />
          </div>
          <div className='flex flex-col items-start mr-6 '>
            <label className='font-bold mb-2'>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setDescription(e.target.value)}  placeholder="What's the task Description?" className='p-2 w-72 text-black  focus:border-2 focus:border-green-600 outline-none' />
          </div>
          <div className='p-2 w-72  focus:border-2 focus:border-green-600 outline-none'>
            <button type='button' className='bg-green-600 text-white mt-8 p-2 w-16 hover:bg-green-800'  onClick={handleAddTodo} >Add</button>
          </div>
        </div>
       
        <div className=''>
       { buttonColor ? <button className='bg-gray-500 text-white mt-8 p-2 w-16' onClick={() => setButtonColor(!buttonColor) }>Todo</button>  :<button className='bg-green-600 text-white mt-8 p-2 w-16' onClick={() => setButtonColor(!buttonColor) }>Todo</button>
       }
       {
        buttonColor ?<button className='bg-green-600 text-white mt-8 p-2 w-fit' onClick={()=>setButtonColor(!buttonColor) }>Completed</button> : <button className='bg-gray-500 text-white mt-8 p-2 w-fit' onClick={() => setButtonColor(!buttonColor) }>Complete</button>
       }  
        </div>
          
        <div className='flex flex-col text-white'>
           {allTodo.map((item, index)=>{
            return(
              <div key={index} className='justify-between flex items-center bg-gray-900 shadow-lg shadow-gray-900 p-6  mb-2 mt-4'>
            <div>            
              <h3 className='font-bold text-3xl text-green-500 m-0 '>{item.title}</h3>
              <p className='text-gray-400 mt-2 text-sm'>{item.description}</p>
            </div>

            <div className='flex'>
              <MdDelete className='cursor-pointer text-3xl hover:text-red-600' onClick={()=>handleDeleteToDo(index)} />
              <FaCheckSquare className='text-3xl ml-2 text-green-500 hover:text-green-700 '/>
            </div>
        </div> 
            )
           })}
      </div>
      </div>
    </div>  
  )
}

export default Browse