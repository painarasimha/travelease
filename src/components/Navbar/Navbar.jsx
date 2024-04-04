import React, { useState } from 'react';

// Assuming you have Link mechanism to store and access user login state
const isLoggedIn = false; // Replace this with your actual login state logic

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="bg-[#db5461] text-[#fff] font-bold flex justify-between items-center px-10 py-5 sticky top-0 shadow-2xl">
      <a href="/" className="text-xl font-bold">TravelEase</a>
      <ul className="flex items-center space-x-4">
        <div className="items-center">
          <button
            className="px-2 py-2 hover:bg-gray-600 rounded-full"
            onClick={handleSearchToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          {searchOpen && (
            <input
              type="text"
              className="rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 placeholder-gray-400"
              placeholder=" Search..."
              value={searchTerm}
              onChange={handleChange}
            />
          )}
        </div>
        <li>
          <a href="#" className="hover:text-black">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-black">Travel Guide</a>
        </li>
        <li>
          <a href="#" className="hover:text-black">Hotels</a>
        </li>
        <li>
          {isLoggedIn ? (
            // Show profile picture for logged-in user
            <a href="#" className='hover:text-black'>
              <svg class="h-8 w-8 text-[#000]-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <i className="fas fa-caret-down"></i>
            </a>
          ) : (
            // Show login/signup button for non-logged-in user
            <a href="/signup" className=" px-3 py-2 rounded-full bg-[#57a93b] text-white hover:bg-[#386a27]">
              Login/Signup
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
