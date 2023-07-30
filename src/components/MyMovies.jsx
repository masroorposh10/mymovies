import { useState,useEffect } from "react";
import React from 'react'
import axios from "axios";

function MyMovies() {
    const [data, setData] = useState([]);
    const [addData, setAddData] = useState({
      name: '',
      id: ''
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const handleAddData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(addData),
        });
  
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      fetchData();
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddData((prevAddData) => ({
        ...prevAddData,
        [name]: value,
      }));
    };


    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
      <div>
        <h1  className="bg-zinc-500 hover:bg-slate-400 text-white font-bold py-2 px-7 border-2 border-gray-900">MY MOVIES</h1>
        <ul>
          {data.map((item) => (
            <li className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-7 border-2 border-purple-800' key={item.id}>
              {item.id} :<a href="www.google.com/" target="_blank"> {item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-2 pt-1 py-1">
      <input
        type="text"
        name="name"
        className="bg-gray-200 rounded-l-lg py-2 px-4 outline-none"
        value={addData.name}
        onChange={handleChange}
        placeholder="Write movie name..."
      />
      <button className="bg-pink-500 text-white py-2 px-4 rounded-full shadow hover:bg-pink-600 transition duration-300 ease-in-out" onClick={handleAddData}>Click to add your own movie</button>
      </div>
      </>
    );
};

export default MyMovies