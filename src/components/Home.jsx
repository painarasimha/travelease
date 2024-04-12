import React from 'react';
import Img1 from '../assets/image2.jpg'; // Background Image
import Img2 from '../assets/image3.jpg'; // Additional Image (replace with your image path)
import Img3 from '../assets/image4.jpg'; // Optional Third Image (uncomment if needed)
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Replace with your actual login route path
  };
  return (
    <div className="container flex h-screen ">
      <div className="background-image w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img1})` }}>
        <div className="hero-text absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pt-[15px] w-[750px]">
          <h1 className='text-5xl text-black font-extrabold mb-2'> Welcome to TravelEase!</h1>
          <h4 className='text-base text-black font-semibold mb-4'>
            Unforgettable Experiences Await: Let TravelEase Be Your Itinerary Guru.
          </h4>
          <p className='text-lg text-black font-medium mb-8 mt-10'>
            Don't waste time researching endless options. Our travel experts curate unique experiences, from hidden gems to must-see attractions, ensuring you make the most of your time.
          </p>
          <button className='text-white font-semibold bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] text-center' onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage