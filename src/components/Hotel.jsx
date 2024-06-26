import React, { useState } from 'react';
import Img2 from '../assets/imagee2.jpg'
import HotelImg1 from '../assets/Hotel1.webp'
import HotelImg2 from '../assets/Hotel2.webp'
import HotelImg3 from '../assets/Hotel3.webp'
import HotelImg4 from '../assets/Hotel4.webp';
import HotelImg5 from '../assets/Hotel5.jpg';
import HotelImg6 from '../assets/Hotel6.webp';
import HotelImg7 from '../assets/Hotel7.jpg';
import HotelImg8 from '../assets/Hotel8.jpg';
import HotelImg9 from '../assets/Hotel9.webp';
import HotelImg10 from '../assets/Hotel10.webp';
import HotelImg11 from '../assets/Hotel11.webp';
import HotelImg12 from '../assets/Hotel12.jpg';

const HotelPage = () => {
  const [searchText, setSearchText] = useState('');
  const [hotels, setHotels] = useState([
    {
      name: 'Fort Chandragupt Hotel,Jaipur',
      image: HotelImg1,
      price: 9350,
      rating: 4.5,
      agodaLink: 'https://www.agoda.com/fort-chandragupt-hotel/hotel/jaipur-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=5b86e72d-39dd-4c68-a6b8-2d0de8a82327&ds=VME%2FwQI9oIIP2zQR'
    },
    {
      name: 'Courtyard Ahmedabad',
      image: HotelImg2,
      price: 6400,
      rating: 4.2,
      agodaLink: 'https://www.agoda.com/courtyard-ahmedabad_4/hotel/ahmedabad-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&los=1&searchrequestid=7e5f6523-3da0-4bcf-a9b8-1c7866f88006&ds=VME%2FwQI9oIIP2zQR'
    },
    {
      name: 'Hilton Mumbai International',
      image: HotelImg3,
      price: 9500,
      rating: 4.8,
      agodaLink: 'https://www.agoda.com/hilton-mumbai-international-airport_5/hotel/mumbai-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-04-12&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=15&los=1&searchrequestid=e55d7b15-c869-490b-a148-f28f9b18fa12&ds=VME%2FwQI9oIIP2zQR'
    },{
      name: 'Vesta International, Jaipur ',
      image: HotelImg4,
      price: 12477,
      rating: 4.2,
      agodaLink: 'https://www.agoda.com/vesta-international/hotel/jaipur-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=879272f1-8dcd-400b-a74e-866e0d344f77&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Holiday Inn Express Ahmedabad Prahlad Nagar ',
      image: HotelImg5,
      price: 3099,
      rating: 3.9,
      agodaLink: 'https://www.agoda.com/holiday-inn-express-ahmedabad-prahlad-nagar/hotel/ahmedabad-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=2%2C8&los=1&searchrequestid=88e0b1cd-e0a0-4926-beb3-7d75a9a72ef0&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Hotel cliffton, Mumbai ',
      image: HotelImg6,
      price: 9761,
      rating: 3.9,
      agodaLink: 'https://www.agoda.com/hotel-cliffton/hotel/mumbai-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=1%2C8&los=1&searchrequestid=c702e65f-5f64-4f29-802c-68c93c3b40cc&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'The Grand Tashree at Delhi Airport',
      image: HotelImg7,
      price: 5759,
      rating: 3.7,
      agodaLink: 'https://www.agoda.com/hotel-grand-tashree-h36930932/hotel/new-delhi-and-ncr-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=4%2C-1&los=2&searchrequestid=29953854-1bb2-4f54-b20c-03cd35d512dd&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Townhouse OAK Hotel C Pearls, Delhi',
      image: HotelImg8,
      price: 5233,
      rating: 3.5,
      agodaLink: 'https://www.agoda.com/c-pearls-hotel-banquet/hotel/new-delhi-and-ncr-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=5%2C-1&los=2&searchrequestid=29953854-1bb2-4f54-b20c-03cd35d512dd&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Hotel Golden Premier Amritsar',
      image: HotelImg9,
      price: 2924,
      rating: 4.7,
      agodaLink: 'https://www.agoda.com/lemon-tree-hotel-amritsar/hotel/amritsar-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&los=1&searchrequestid=262f2d85-22db-41a9-b90f-0cd7f49696d9&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Country Inn Hall of Heritage Amritsar',
      image: HotelImg10,
      price: 11000,
      rating: 3.7,
      agodaLink: 'https://www.agoda.com/hall-of-heritage/hotel/amritsar-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=7%2C8&los=1&searchrequestid=262f2d85-22db-41a9-b90f-0cd7f49696d9&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Lance Silver Falls Resorts,Ooty',
      image: HotelImg11,
      price: 5338,
      rating: 3.5,
      agodaLink: 'https://www.agoda.com/lance-silver-falls-resorts/hotel/ooty-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=5%2C8&los=1&searchrequestid=1c5abd26-18e5-4889-bcde-9a423942660b&ds=P3NjgOF%2BSZaW0pjp'
    },
    {
      name: 'Accord Highland Ooty',
      image: HotelImg12,
      price: 7561,
      rating: 4.2,
      agodaLink: 'https://www.agoda.com/accord-highland-ooty/hotel/ooty-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=7%2C1&los=1&searchrequestid=1c5abd26-18e5-4889-bcde-9a423942660b&ds=P3NjgOF%2BSZaW0pjp'
    }
    // Add more hotels here
  ]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredHotels = hotels.filter((hotel) => {
    return hotel.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="h-screen bg-cover fixed w-full overflow-y-auto bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="flex flex-col items-center overflow-y-auto justify-between mb-24">
        <input
          type="text"
          placeholder="Search hotels..."
          value={searchText}
          onChange={handleSearch}
          className="w-full rounded-full shadow-xl px-4 py-3 d:w-3/4 lg:w-1/2 focus:outline-none mt-20 border-black bg-white pl-2 mb-10"
        />
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {filteredHotels.map((hotel, index) => (
            <div key={index} className='w-[400px] h-[440px] border-4 border-black rounded-sm bg-white'>
              <div className="w-[393px] h-56 shadow-md shadow-black rounded-sm bg-cover p-4 text-center" style={{backgroundImage: `url(${hotel.image})`}}></div>
              <h2 className='text-2xl font-bold px-5 py-2'>{hotel.name}</h2>
              <p className='text-[9px] font-bold -mb-2 ml-10'>Starting Rate/Night</p>
              <div className='ml-5'>
                <span className='text-2xl font-bold'>₹</span>
                <span className='text-[36px] font-bold'>{hotel.price}</span>
                <p className='text-sm font-bold -mt-8 ml-[180px]'>Rating:{hotel.rating} &#9733;</p>
              </div>
              <div className='flex justify-between items-center mb-2'>
              </div>
              <button className='bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] ml-4 mt-5 shadow-sm shadow-black' onClick={() => window.open(hotel.agodaLink)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelPage;