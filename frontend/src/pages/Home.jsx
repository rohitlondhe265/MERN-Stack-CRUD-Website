import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="h-screen w-screen bg-gray-200 p-6">
      <h1 className="text-4xl text-violet-600 font-bold mb-3">Online Book Store</h1>

      <div className="books flex items-center justify-center gap-6">
        {books.map((book) => (
          <div key={book.id} className="book bg-slate-200 flex flex-1 flex-col items-center justify-center mt-3 rounded-xl ">
            <img src={book.cover} className="w-60 h-60 object-contain" />
            <h2 className="text-2xl text-violet-600">{book.title}</h2>
            <p className="text-justify">{book.description}</p>
            <span className="font-bold">${book.price}</span>

          <div className="flex ">
            <button className="delete bg-blue-500 rounded-xl text-white w-24 h-9 m-3 hover:text-gray-900 hover:bg-blue-300 hover:border hover:border-gray-600" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update bg-blue-500 rounded-xl text-white w-24 h-9 m-3 hover:text-gray-900 hover:bg-blue-300 hover:border hover:border-gray-600">
              <Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-blue-500 rounded-xl text-white w-36 h-9 mt-6 hover:bg-blue-400">
        <Link to="/add" className="">
          Add new book
        </Link>
      </button>
      
    </div>
  );
};

export default Home;