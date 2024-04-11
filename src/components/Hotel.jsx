import React from 'react';
import Img2 from '../assets/image5.jpg'
import HotelImg1 from '../assets/Hilton.webp'
import HotelImg2 from '../assets/Courtyard.webp'
import HotelImg3 from '../assets/fortchandragupt.webp'

const HotelPage = () => {

  const handleHilton = () => {
    window.location.href = 'https://www.agoda.com/en-in/hilton-mumbai-international-airport_5/hotel/mumbai-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&los=2&searchrequestid=b00fbb39-3e72-499c-bb8d-617414d6ee9f&ds=VME%2FwQI9oIIP2zQR';
  };

  const handleFortChandragupt = () => {
    window.location.href = 'https://www.agoda.com/en-in/fort-chandragupt-hotel/hotel/jaipur-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-11&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=dd0bcb5b-bdad-4c60-8c2f-42d98da82f5c&ds=VME%2FwQI9oIIP2zQR';
    };

  const handleCourtyard = () => {
    window.location.href = 'https://www.agoda.com/en-in/courtyard-ahmedabad_4/hotel/ahmedabad-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&los=2&searchrequestid=8be4df27-9a7e-42dd-b00d-88d4837534c2&ds=VME%2FwQI9oIIP2zQR';
  };

  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className='w-[400px] h-[395px] bg-white rounded-lg'>
            <div className="h-[215px] w-[400px] bg-cover shadow-md shadow-black p-4 text-center" style={{backgroundImage: `url(${HotelImg1})`}}></div>
            <h3 className='text-2xl font-bold px-5 mt-4'>Hilton Mumbai Intnl Airport</h3>
            <span className='text-[9px] font-bold px-10'>Starting Rate/Night</span>
            <div className='flex items-baseline px-5'>
              <span className='text-xl font-semibold'>₹</span>
              <h3 className='text-3xl font-bold'>10,300*</h3>
            </div>
            <button className='w-32 h-12 ml-4 mt-2 bg-[#57a93b] py-2 px-4 rounded-full hover:bg-[#386a27] text-lg font-bold shadow-sm shadow-black' onClick={handleHilton}>
              Book Now
            </button>
          </div>
          <div className='w-[400px] h-[395px] bg-white rounded-lg'>
            <div className="h-[215px] w-[400px] bg-cover shadow-md shadow-black p-4 text-center" style={{backgroundImage: `url(${HotelImg2})`}}></div>
            <h3 className='text-2xl font-bold px-5 mt-4'>Courtyard Ahmedabad</h3>
            <span className='text-[9px] font-bold px-10'>Starting Rate/Night</span>
            <div className='flex items-baseline px-5'>
              <span className='text-xl font-semibold'>₹</span>
              <h3 className='text-3xl font-bold'>6,300*</h3>
            </div>
            <button className='w-32 h-12 ml-4 mt-2 bg-[#57a93b] py-2 px-4 rounded-full hover:bg-[#386a27] text-lg font-bold shadow-sm shadow-black' onClick={handleCourtyard}>
              Book Now
            </button>
          </div>
          <div className='w-[400px] h-[395px] bg-white rounded-lg'>
            <div className="h-[215px] w-[400px] bg-cover shadow-md shadow-black p-4 text-center" style={{backgroundImage: `url(${HotelImg3})`}}></div>
            <h3 className='text-2xl font-bold px-5 mt-4'>Fort Chandragupt Hotel</h3>
            <span className='text-[9px] font-bold px-10'>Starting Rate/Night</span>
            <div className='flex items-baseline px-5'>
              <span className='text-xl font-semibold'>₹</span>
              <h3 className='text-3xl font-bold'>1,667*</h3>
            </div>
            <button className='w-32 h-12 ml-4 mt-2 bg-[#57a93b] py-2 px-4 rounded-full hover:bg-[#386a27] text-lg font-bold shadow-sm shadow-black' onClick={handleFortChandragupt}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
