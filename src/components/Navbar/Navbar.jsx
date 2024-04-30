import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

// Assuming you have Link mechanism to store and access user login state
const auth = getAuth();
const user = auth.currentUser;

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="bg-[#142350] text-[#fff] font-bold flex justify-between items-center px-10 py-5 top-0 shadow-2xl"
    >
      <Link to="/" className="text-2xl font-bold">TravelEase</Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className="hover:text-black">Home</Link>
        </li>
        <li>
          <Link to="/travelpage" className="hover:text-black">Travel Guide</Link>
        </li>
        <li>
          {user ? (
            <div className="relative">
              <button
                type="button"
                onClick={handleDropdownToggle}
                className="flex items-center hover:text-black"
              >
                <svg
                  className="h-8 w-8 text-[#000]-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <i className="fas fa-caret-down ml-2"></i>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-sm">
                  <h3 className="text-base font-medium text-gray-700 px-4 py-2">
                    My Account
                  </h3>
                  <ul className="block">
                    <li>
                      <Link
                        to="/profilediv"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownClose} // Close dropdown on selection
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownClose} // Close dropdown on selection
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
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
