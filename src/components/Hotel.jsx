import React from 'react';
import Img2 from '../assets/image5.jpg'
import HotelImg1 from '../assets/Hotel1.webp'
import HotelImg2 from '../assets/Hotel2.webp'
import HotelImg3 from '../assets/Hotel3.webp'

const HotelPage = () => {

  const handleChandragupt = () => {
    window.location.href = 'https://www.agoda.com/fort-chandragupt-hotel/hotel/jaipur-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=5b86e72d-39dd-4c68-a6b8-2d0de8a82327&ds=VME%2FwQI9oIIP2zQR';
  };

  const handleCourtyard = () => {
    window.location.href = 'https://www.agoda.com/courtyard-ahmedabad_4/hotel/ahmedabad-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&los=1&searchrequestid=7e5f6523-3da0-4bcf-a9b8-1c7866f88006&ds=VME%2FwQI9oIIP2zQR';
  };

  const handleHilton = () => {
    window.location.href = 'https://www.agoda.com/hilton-mumbai-international-airport_5/hotel/mumbai-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=15&los=1&searchrequestid=e55d7b15-c869-490b-a148-f28f9b18fa12&ds=VME%2FwQI9oIIP2zQR';
  };

  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className='w-[400px] h-[400px] border-4 border-black rounded-sm bg-white'>
            <div className="w-[393px] h-56 shadow-md shadow-black rounded-sm bg-cover p-4 text-center" style={{backgroundImage: `url(${HotelImg1})`}}></div>
              <h2 className='text-2xl font-bold px-5 py-3'>Fort Chandragupt Hotel</h2>
              <p className='text-[9px] font-bold -mb-2 ml-10'>Starting Rate/Night</p>
              <div className='ml-5'>
                <span className='text-2xl font-bold'>₹</span>
                <span className='text-[36px] font-bold'>9,350</span>
              </div>
              <button className='bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] ml-6 mt-1 shadow-sm shadow-black' onClick={handleChandragupt}>
                Book Now
              </button>
          </div>
          <div className='w-[400px] h-[400px] border-4 border-black rounded-sm bg-white'>
            <div className="w-[393px] h-56 shadow-md shadow-black rounded-sm bg-cover p-4 text-center" style={{backgroundImage: `url(${HotelImg2})`}}></div>
              <h2 className='text-2xl font-bold px-5 py-3'>Courtyard Ahmedabad</h2>
              <p className='text-[9px] font-bold -mb-2 ml-10'>Starting Rate/Night</p>
              <div className='ml-5'>
                <span className='text-2xl font-bold'>₹</span>
                <span className='text-[36px] font-bold'>6,400</span>
              </div>
              <button className='bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] ml-6 mt-1 shadow-sm shadow-black' onClick={handleCourtyard}>
                Book Now
              </button>
          </div>
          <div className='w-[400px] h-[400px] border-4 border-black rounded-sm bg-white'>
            <div className="w-[393px] h-56 shadow-md shadow-black rounded-sm bg-cover p-4 text-center" style={{backgroundImage: `url(${HotelImg3})`}}></div>
              <h2 className='text-2xl font-bold px-5 py-3'>Fort Chandragupt Hotel</h2>
              <p className='text-[9px] font-bold -mb-2 ml-10'>Starting Rate/Night</p>
              <div className='ml-5'>
                <span className='text-2xl font-bold'>₹</span>
                <span className='text-[36px] font-bold'>9,500</span>
              </div>
              <button className='bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] ml-6 mt-1 shadow-sm shadow-black' onClick={handleHilton}>
                Book Now
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
