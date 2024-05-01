import React from 'react'
import Img2 from '../assets/image5.jpg'
import leftarrow from '../assets/leftarrow.svg'
import GuideProfile2 from '../assets/prof2.jpg'
import { useNavigate } from 'react-router-dom';

function GuidePag2({ firstName = 'Priya', lastName = 'Jha' }) {
  const navigate = useNavigate();

  const handleLeftArrow = () => {
    navigate('/travelpage')
  }
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
      <div className='w-[1260px] h-[590px] fixed bg-[#606421] rounded-3xl shadow-inner shadow-black py-8'>
        <div className='py-16 px-20'>
          <h1 className='text-2xl mt-16 ml-5 font-bold'>Description</h1>
          <p className='text-lg ml-5 text-black font-semibold py-2'>Ahmedabad, the largest city in Gujarat, is a vibrant blend of ancient heritage and modernity. 
          From its intricate pols (old residential complexes) in the historic old city to its contemporary shopping malls and vibrant street food scene, Ahmedabad offers a captivating glimpse into India's past and present.</p>
          <h1 className='text-2xl font-bold mt-4 ml-5'>Travel Plan</h1>
          <div className='grid grid-cols-4 ml-5'>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 1</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Sabarmati Ashram</li>
                <li>Sidi Saiyyed Mosque</li>
                <li>Calico Museum of Textiles</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 2</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Adalaj Stepwell</li>
                <li>Hutheesing Jain Temple</li>
                <li>Akshardham Temple</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 3</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Food delights at Manek Chowk</li>
                <li>Markets of Law Garden</li>
                <li>UNESCO World Heritage Site of Rani ki Vav in Patan</li>
                <li>Modhera Sun Temple</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 flex py-48 px-52'>
        <img src={GuideProfile2} alt="guide1profile" className='w-24 h-24 fixed rounded-full border-4 -mt-6 border-black object-cover' />
        <h1 className="text-2xl font-black ml-28 -mt-3 fixed text-black">{firstName} {lastName}</h1>
        <h3 className='fixed mt-5 ml-[116px] font-semibold'>Discover Ahmedabad's Hidden Treasures with Me.</h3>
        <span className='fixed mt-10 ml-[114px] text-sm font-semibold'>+91 8980142334              <b className='font-black'>|</b></span>
        <span className='fixed mt-10 ml-[234px] text-sm font-semibold'>PriyaJha24@gmail.com</span>
        <button className='fixed -mt-10 -ml-14 hover:scale-150 rounded' onClick={handleLeftArrow}>
          <img src={leftarrow} className='w-5 h-5 rounded' />
        </button>
      </div>
    </div >

  )
}

export default GuidePag2