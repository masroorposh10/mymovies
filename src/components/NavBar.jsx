import React from 'react';

const Navbar = () => {
  const handleMyMoviesClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-purple-600 text-2xl font-bold ">SIUU MOVIES</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleMyMoviesClick}
              className="text-white hover:text-gray-300"
            >
              My Movies
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
