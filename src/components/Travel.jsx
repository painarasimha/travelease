import React from 'react';
import Img2 from '../assets/image2.jpg'
import { useNavigate } from 'react-router-dom'


function TravelGuidePage() {
  const navigate = useNavigate();

  const handleViewGuide1 = () => {
    navigate('/guidepage1'); // Replace with your actual login route path
  };

  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Img2})` }}
    >
      {/* Search Bar */}
      <div className="flex justify-center pt-36"> {/* Padding from navbar */}
        <div className="bg-white rounded-full shadow-xl px-4 py-3 w-full md:w-3/4 lg:w-1/2">
          <input type="text" className="w-full px-2 py-1 rounded-2xl focus:outline-none" placeholder="Search for guides by location" />
        </div>
      </div>

      {/* Travel Guide Cards */}
      <div className="flex justify-center mt-24 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-lg text-center shadow-md p-4 w-96 h-96">
            <img
              src="https://placeimg.com/640/480/arch"
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-20 h-20 mb-2 mt-20"
            />
            <h3 className="text-xl font-medium text-center">John Doe</h3>
            <p className="text-gray-600 text-center">Experienced France Explorer</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide1}>
              View Guide
            </button>
          </div>

          {/* Card 2 (Replace with your own content) */}
          <div className="bg-white rounded-lg text-center shadow-md p-4 w-96 h-96">
            <img
              src="https://placeimg.com/640/480/nature"
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-20 h-20 mb-2 mt-20"
            />
            <h3 className="text-xl font-medium text-center">Jane Smith</h3>
            <p className="text-gray-600 text-center">Passionate Italy Enthusiast (Replace with guide's expertise)</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">
              View Guide
            </button>
          </div>

          {/* Card 3 (Replace with your own content) */}
          <div className="bg-white rounded-lg text-center shadow-md p-4 w-96 h-96">
            <img
              src="https://placeimg.com/640/480/city"
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-20 h-20 mb-2 mt-20"
            />
            <h3 className="text-xl font-medium text-center">Michael Chen</h3>
            <p className="text-gray-600 text-center">Adventurous Spain Traveler (Replace with guide's expertise)</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">
              View Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuidePage;
