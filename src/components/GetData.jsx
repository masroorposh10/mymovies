import React, { useEffect } from 'react'
import { useState } from 'react';

function GetData() {

  const [data, setData] = useState(null);


  const fetchData = async () => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch('https://api.themoviedb.org/3/movie/' + randomNum + '?api_key=def0d3a62864c0fa9e7929b81d84046b');
    const json = await response.json();
    setData(json.title);
    console.log(data);
    var movie = "https://www.google.com/search?q=" + data + "&rlz=1C1GCEU_enCA1005CA1005&oq=cruel+intentions&aqs=chrome..69i57j0i271.3087j0j1&sourceid=chrome&ie=UTF-8"
    console.log(movie);
    

  };



  return (
    <div className=''>
      <button className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={fetchData}>CLICK TO GENERATE A RANDOM MOVIE TO WATCH</button>
      <ul className='pt-6'>
        <li className='mx-7'>
          <p className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-7 border-2 border-purple-800'><a id="my-link" href="#" target="_blank">{data}</a>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default GetData