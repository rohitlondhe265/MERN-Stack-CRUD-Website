import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom';

const Update = () => {

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: null,
    cover: ""
  });
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e)=>{
    setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/books/${bookId}`, input)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(input);

  return (
    <div className='form flex flex-col gap-6 items-center'>
      <h1 className='text-6xl font-bold my-6'>Update The Book</h1>
        <input type="text" placeholder='title' className='w-96 p-3 border border-gray-300' name='title' onChange={handleChange} />
        <input type="text" placeholder='description' className='w-96 p-3 border border-gray-300' name='description' onChange={handleChange} />
        <input type="number" placeholder='price' className='w-96 p-3 border border-gray-300' name='price' onChange={handleChange} />
        <input type="text" placeholder='cover' className='w-96 p-3 border border-gray-300' name='cover' onChange={handleChange} />
        <button onClick={handleClick} className="bg-blue-600 rounded-xl text-white w-36 h-9 mt-6">Update</button>
    </div>
  )
}

export default Update;