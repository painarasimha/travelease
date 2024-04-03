import React from 'react';
import Img4 from '../assets/image4.jpg'

const HotelPage = () => {  
  return (
    <div className="bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${Img4})` }}>
      <div className="flex justify-center items-center h-2/3">
        <div className="bg-white rounded-full shadow-xl px-4 py-3 w-full md:w-3/4 lg:w-1/2">
          <input type="text" className="w-full px-2 py-1 rounded-2xl focus:outline-none" placeholder="Search for hotels by location" />
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
