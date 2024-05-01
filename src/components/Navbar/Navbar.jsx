import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

// Assuming you have a mechanism to store and access user login state
const auth = getAuth();
const user = auth.currentUser; // Replace with your logic to determine logged-in user

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = (event) => {
    // Close dropdown on click outside the dropdown content
    if (event.target.closest('.dropdown-content')) return;
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Sign-out successful
      console.log("Signed Out Successfully!");
      // You can redirect to login page here (optional)
      // window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
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
        <li className="dropdown relative">
          { user ? (
            <div onClick={handleDropdownOpen} className="cursor-pointer hover:text-black">
              <svg className="h-8 w-8 text-[#000]-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <i className="fas fa-caret-down absolute right-0 top-1"></i>
            </div>
          ) : (
            <Link to="/login" className="justify-items-center px-3 py-2 rounded-full bg-[#316b1d] text-white hover:bg-[#386a27]">
              Login/Signup
            </Link>
          )}

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 shadow-sm dropdown-content">
              <span className="block px-4 py-2 font-bold text-black">My Account</span>
              <Link to="/profile" className="block px-4 py-2 text-black z-10 hover:bg-gray-500 cursor-pointer" onClick={handleDropdownClose}>Profile</Link>
              <span className="block px-4 py-2 text-black z-10 hover:bg-gray-500 cursor-pointer" onClick={handleLogout}>Logout</span>
            </div>
          )}
        </li>
      </ul>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-40" onClick={handleDropdownClose} style={{ display: isDropdownOpen ? 'block' : 'none' }}></div>
    </nav>
  );
};

export default Navbar;
