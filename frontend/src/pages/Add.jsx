import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Add = () => {

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: null,
    cover: ""
  });
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    console.log("btn click")
        try {
      await axios.post("http://localhost:8000/books", input)
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }

  console.log(input);

  return (
    <div className='form flex flex-col gap-6 items-center'>
      <h1 className='text-6xl font-bold my-6'>Add New Book</h1>
        <input type="text" placeholder='title' className='w-96 p-3 border border-gray-300' name='title' onChange={handleChange} />
        <input type="text" placeholder='description' className='w-96 p-3 border border-gray-300' name='description' onChange={handleChange} />
        <input type="number" placeholder='price' className='w-96 p-3 border border-gray-300' name='price' onChange={handleChange} />
        <input type="text" placeholder='cover' className='w-96 p-3 border border-gray-300' name='cover' onChange={handleChange} />
        <button onClick={handleClick} className="bg-blue-600 rounded-xl text-white w-36 h-9 mt-6">Add</button>
    </div>
  )
}

export default Add