import React, { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');

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

  const guides = [
    {
      name: 'Vihaan Ahuja',
      description: 'From Old-world Charm to Modern Marvels: Explore Delhi with Me',
      image: ProfImg1,
      place: 'Delhi',
      onClick: handleViewGuide1,
    },
    {
      name: 'Priya Jha',
      description: 'Discover Ahmedabad\'s Hidden Treasures with Me.',
      image: ProfImg2,
      place:'Ahmedabad',
      onClick: handleViewGuide2,
    },
    {
      name: 'Arushi Agarwal',
      description: 'Experience Jaipur\'s Majesty Through My Local Lens',
      image: ProfImg3,
      place: 'Jaipur',
      onClick: handleViewGuide3,
    },
    {
      name: 'Ishaan Batra',
      description: 'From Bollywood to Bazaars: Your Personalized Mumbai Guide.',
      image: ProfImg4,
      place: 'Mumbai',
      onClick: handleViewGuide4,
    },
    {
      name: 'Baldev Choudhary',
      description: 'Experience Amritsar\'s Rich Heritage with a Personal Touch!',
      image: ProfImg5,
      place: 'Amritsar',
      onClick: handleViewGuide5,
    },
    {
      name: 'Aisha Syed',
      description: 'From Tea Gardens to Tranquil Lakes: Discover Ooty with Me!',
      image: ProfImg6,
      place: 'Ooty',
      onClick: handleViewGuide6,
    },
  ];

  const filteredGuides = guides.filter((guide) => guide.place.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div
      className="h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Img2})` }}
    >
      {/* Search Bar */}
      <div className="flex justify-center pt-36"> {/* Padding from navbar */}
        <div className="bg-white rounded-full shadow-xl px-4 py-3 w-full md:w-3/4 lg:w-1/2">
          <input
            type="text"
            className="w-full px-2 py-1 rounded-2xl focus:outline-none"
            placeholder="Search for guides by location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Travel Guide Cards */}
      <div className="flex justify-center mt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredGuides.map((guide) => (
            <div
              key={guide.name}
              className="bg-gray-300 shadow-black rounded-lg text-center shadow-sm p-4 w-96 h-96"
            >
              <img
                src={guide.image}
                alt="Travel guide profile picture"
                className="rounded-full mx-auto w-32 h-32 mb-2 mt-10 object-cover"
              />
              <h3 className="text-xl font-medium text-center">{guide.name}</h3>
              <p className="text-gray-600 text-center">{guide.description}</p>
              <button className="mt-12 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={guide.onClick}>
                View Guide
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelGuidePage;
