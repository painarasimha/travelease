import React, { useState } from 'react';
import Img2 from '../assets/image4.jpg'; // Additional Image (replace with your path)
import Img1 from '../assets/image2.jpg'; // Background Image

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initial state (replace with logic to check actual login status)

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Redirect to account page or dashboard
      window.location.href = '/account'; // Replace with your actual URL
    } else {
      // Redirect to signup or login page
      window.location.href = '/signup'; // Replace with your actual URL
    }
  };

  return (
    <div className="container flex h-screen">
      {/* Background Image with Hero Text */}
      <div className="background-image w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="hero-text absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pt-[15px] w-[750px]">
          <h1 className="text-5xl text-black font-extrabold mb-2">Welcome to TravelEase!</h1>
          <h4 className="text-base text-black font-semibold mb-4">
            Unforgettable Experiences Await: Let TravelEase Be Your Itinerary Guru.
          </h4>
          <p className="text-lg text-black font-medium mb-8 mt-10">
            Don't waste time researching endless options. Our travel experts curate unique experiences, from hidden gems to must-see attractions, ensuring you make the most of your time.
          </p>
          <button
            className="text-white font-semibold bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] text-center"
            onClick={handleButtonClick}
          >
            {isLoggedIn ? 'Go to Account' : 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
