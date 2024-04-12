import React from 'react';
import Img2 from '../assets/image2.jpg'
import { useNavigate } from 'react-router-dom'
import ProfImg1 from '../assets/prof1.jpg'
import ProfImg2 from '../assets/prof2.jpg'
import ProfImg3 from '../assets/prof3.jpg'
import ProfImg4 from '../assets/prof4.jpg'
import ProfImg5 from '../assets/prof5.jpg'
import ProfImg6 from '../assets/prof7.jpg'


function TravelGuidePage() {
  const navigate = useNavigate();

  const handleViewGuide1 = () => {
    navigate('/guidepage1'); // Replace with your actual login route path
  };

  const handleViewGuide2 = () => {
    navigate('/guidepage2');
  };

  const handleViewGuide3 = () => {
    navigate('/guidepage3');
  };

  const handleViewGuide4 = () => {
    navigate('/guidepage4');
  };

  const handleViewGuide5 = () => {
    navigate('/guidepage5');
  };

  const handleViewGuide6 = () => {
    navigate('/guidepage6');
  };
  return (
    <div
      className="h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Img2})` }}
    >
      {/* Search Bar */}
      <div className="flex justify-center pt-36"> {/* Padding from navbar */}
        <div className="bg-white rounded-full shadow-xl px-4 py-3 w-full md:w-3/4 lg:w-1/2">
          <input type="text" className="w-full px-2 py-1 rounded-2xl focus:outline-none" placeholder="Search for guides by location" />
        </div>
      </div>

      {/* Travel Guide Cards */}
      <div className="flex justify-center mt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg1}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Vihaan Ahuja</h3>
            <p className="text-gray-600 text-center">From Old-world Charm to Modern Marvels: Explore Delhi with Me</p>
            <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide1}>
              View Guide
            </button>
          </div>

          {/* Card 2 (Replace with your own content) */}
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg2}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Priya Jha</h3>
            <p className="text-gray-600 text-center">Discover Ahmedabad's Hidden Treasures with Me.</p>
            <button className="mt-[72px] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide2}>
              View Guide
            </button>
          </div>

          {/* Card 3 (Replace with your own content) */}
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg3}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Arushi Agarwal</h3>
            <p className="text-gray-600 text-center">Experience Jaipur's Majesty Through My Local Lens</p>
            <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide3}>
              View Guide
            </button>
          </div>
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg4}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Ishaan Batra</h3>
            <p className="text-gray-600 text-center">From Bollywood to Bazaars: Your Personalized Mumbai Guide.</p>
            <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide4}>
              View Guide
            </button>
          </div>
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg5}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Baldev Choudhary</h3>
            <p className="text-gray-600 text-center">Experience Amritsar's Rich Heritage with a Personal Touch!</p>
            <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide5}>
              View Guide
            </button>
          </div>
          <div className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96">
            <img
              src={ProfImg6}
              alt="Travel guide profile picture"
              className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
            />
            <h3 className="text-xl font-medium text-center">Aisha Syed</h3>
            <p className="text-gray-600 text-center">From Tea Gardens to Tranquil Lakes: Discover Ooty with Me!</p>
            <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleViewGuide6}>
              View Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuidePage;
