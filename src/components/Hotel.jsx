import React from 'react';
import Img2 from '../assets/image5.jpg'

const HotelPage = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-white rounded-full shadow-xl px-4 py-2 w-full md:w-3/4 lg:w-1/2">
          <input type="text" className="w-full px-2 py-1 rounded-2xl focus:outline-none" placeholder="Search for hotels by location" />
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="w-64 h-64 rounded-lg bg-white shadow-md p-4 text-center">
            {/* Hotel Card 1 Content */}
          </div>
          <div className="w-64 h-64 rounded-lg bg-white shadow-md p-4 text-center">
            {/* Hotel Card 2 Content */}
          </div>
          <div className="w-64 h-64 rounded-lg bg-white shadow-md p-4 text-center">
            {/* Hotel Card 3 Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
