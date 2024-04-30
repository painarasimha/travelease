import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

// Assuming you have Link mechanism to store and access user login state
const user = auth.currentUser;

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
    <nav className="bg-[#142350] text-[#fff] font-bold flex justify-between items-center px-10 py-5 top-0 shadow-2xl">
      <Link to="/" className="text-2xl font-bold">TravelEase</Link>
      <ul className="flex items-center space-x-4">
        
        <li>
          <Link to="/" className="hover:text-black">Home</Link>
        </li>
        <li>
          <Link to="/travelpage" className="hover:text-black">Travel Guide</Link>
        </li>
        <li>
          <Link to="/hotel" className="hover:text-black">Hotels</Link>
        </li>
        <li>
          { user ? (
            // Show profile picture for logged-in user
            <Link to="/profilediv" className='hover:text-black'>
              <svg className="h-8 w-8 text-[#000]-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <i className="fas fa-caret-down"></i>
            </Link>
          ) : (
            // Show login/signup button for non-logged-in user
            <Link to="/login" className="justify-items-center px-3 py-2 rounded-full bg-[#316b1d] text-white hover:bg-[#386a27]">
              Login/Signup
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
