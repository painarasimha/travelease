import React, { useState } from 'react';
import Img2 from '../assets/image5.jpg'
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

const hotels = [
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
  },
  {
    name: 'Vesta International,Jaipur',
    image: HotelImg4,
    price: 12477,
    rating: 4.2,
    agodaLink: 'https://www.agoda.com/vesta-international/hotel/jaipur-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=879272f1-8dcd-400b-a74e-866e0d344f77&ds=P3NjgOF%2BSZaW0pjp'
  },
  {
    name: 'Holiday Inn Express',
    image: HotelImg5,
    price: 3099,
    rating: 3.9,
    agodaLink: 'https://www.agoda.com/holiday-inn-express-ahmedabad-prahlad-nagar/hotel/ahmedabad-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=2%2C8&los=1&searchrequestid=88e0b1cd-e0a0-4926-beb3-7d75a9a72ef0&ds=P3NjgOF%2BSZaW0pjp'
  },
  {
    name: 'Hotel cliffton, Mumbai',
    image: HotelImg6,
    price: 9761,
    rating: 3.9,
    agodaLink: 'https://www.agoda.com/hotel-cliffton/hotel/mumbai-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=1%2C8&los=1&searchrequestid=c702e65f-5f64-4f29-802c-68c93c3b40cc&ds=P3NjgOF%2BSZaW0pjp'
  },
  {
    name: 'The Grand Tashree,Delhi',
    image: HotelImg7,
    price: 5759,
    rating: 3.7,
    agodaLink: 'https://www.agoda.com/hotel-grand-tashree-h36930932/hotel/new-delhi-and-ncr-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=-999&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-05-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=4%2C-1&los=2&searchrequestid=29953854-1bb2-4f54-b20c-03cd35d512dd&ds=P3NjgOF%2BSZaW0pjp'
  }, {
    name: 'Townhouse OAK Hotel C Pearls',
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
    name: 'Country Inn Hall of Heritage',
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
];

const handleBooking = (hotel) => {
  window.location.href = hotel.agodaLink;
};

const HotelCard = ({ hotel }) => (
  <div className="flex flex-col flex-start justify-center w-[400px] h-[400px] border-4 border-black rounded-sm bg-white">
    <div className="shadow-md shadow-black rounded-sm bg-cover -mt-[63px]" style={{ backgroundImage: `url(${hotel.image})`, height: '200px', width: '393px' }}>
      <div className="h-full flex items-end justify-start mt-8">
        <h2 className='text-2xl ml-3 font-bold text-left'>{hotel.name}</h2>
      </div>
    </div>
    <div className='text-left grid grid-cols-1'>
      <p className='text-[7px] font-bold -mb-2 mt-9 ml-9 text-left'>Starting Rate/Night</p>
      <span className='text-[36px] font-bold'><span className='text-2xl font-bold ml-[14px]'>₹</span>{hotel.price}<p className='text-sm font-bold mt-2 ml-4'>Rating:{hotel.rating} &#9733;</p></span>
      
    </div>
    <button className='bg-[#57a93b] -mb-10 mt-2 w-40 py-2 px-2 rounded-md hover:bg-[#386a27] ml-4 shadow-sm shadow-black text-left' onClick={() => handleBooking(hotel)}>
      Book Now
    </button>
  </div>
);

const HotelPage = () => {
  const [searchText, setSearchText] = useState('');
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="h-screen fixed overflow-hidden w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="flex flex-col items-center justify-center h-full overflow-y-scroll">
        <input
          className='w-full mt-[1320px] mb-4 px-4 py-3 md:w-3/4 lg:w-1/2  rounded-full shadow-xl border border-black focus:outline-none focus:border-sky-500'
          placeholder='Search for Hotels by Place'
          value={searchText}
          onChange={handleSearchChange}
        />
        <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 py-5 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-[40px]">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelPage;