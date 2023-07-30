import './App.css';
import ChartApi from './ChartApi';
import Flexbox from './Flexbox';
import Grids from './Grids';
import { useState,useEffect, useRef } from 'react';
import Navbar from './components/NavBar';
import MyMovies from './components/MyMovies';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [state, setState] = useState(false);
  const [buttonText, setButtonText] = useState('CLOSE')

  const openPopup = () => {
    setShowPopup(!state);
    setState(!state)
    setButtonText('VIEW')
  };
  return (
    <>
    <div className="App">
      <Navbar/>
      <Flexbox />
    </div >
    <Grids/>
    <div>
     <ChartApi/>
    </div>
    <div className='pt-1'>
      <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={openPopup}>CLICK TO {buttonText} YOUR OWN MOVIES DATABASE  
        </button>
      {showPopup && (
        <div>
          <MyMovies/>
        </div>
      )}
    </div>
    
    <footer className='justify-center text-center text-3xl text-fuchsia-400 bg-gray-600'>@MASROOR</footer>
    </>
  );
}

export default App;