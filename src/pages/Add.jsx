import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    id:"",
    category: "",
    gender: "",
    price: null
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(book)
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Item</h1>
      <input
        type="number"
        placeholder="ID"
        name="id"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Item category title"
        name="category"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Gender"
        name="gender"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      {/* <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      /> */}
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all Item</Link>
    </div>
  );
};

export default Add;
