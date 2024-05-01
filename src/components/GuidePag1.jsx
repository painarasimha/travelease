import React from 'react'
import Img2 from '../assets/image5.jpg'
import leftarrow from '../assets/leftarrow.svg'
import GuideProfile1 from '../assets/prof1.jpg'
import { useNavigate } from 'react-router-dom';

function GuidePag1({firstName = 'Vihaan', lastName = 'Ahuja'}) {
  const navigate = useNavigate();

  const handleLeftArrow = () =>{
    navigate('/travelpage')
  }
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
        <div className='w-[1260px] h-[590px] fixed bg-[#606421] rounded-xl shadow-inner shadow-black py-8'>
          <div className='py-16 px-20'>
            <h1 className='text-2xl mt-16 ml-5 font-bold'>Description</h1>
            <p className='text-lg ml-5 text-black font-semibold py-2'>Delhi, the vibrant capital of India, is a treasure trove of history, culture, and modernity. 
            Explore its ancient monuments like the majestic Red Fort and the iconic Qutub Minar, which narrate tales of bygone eras.</p>
            <h1 className='text-2xl font-bold mt-4 ml-5'>Travel Plan</h1>
            <div className='grid grid-cols-4 ml-5'>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 1</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Charm of Old Delhi</li>
                <li>Red Fort</li>
                <li>Chandni Chowk</li>
                <li>Jama Masjid</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 2</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>India Gate</li>
                <li>Rashtrapati Bhava</li>
                <li>Humayun's Tomb</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 3</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>National Museum</li>
                <li>Lodhi Garden</li>
                <li>The Lotus Temple</li>
                <li>Taj Mahal & Agra Fort</li>
              </ul>
            </div>
          </div>
          </div>  
        </div>
        <div className='absolute inset-0 flex py-48 px-52'>
            <img src={GuideProfile1} alt="guide1profile" className='w-24 h-24 fixed rounded-full border-4 -mt-6 border-black object-cover'/>
            <h1 className="text-2xl font-black ml-28 -mt-3 fixed text-black">{firstName} {lastName}</h1>
            <h3 className='fixed mt-5 ml-[116px] text-sm font-semibold'>From Old-world Charm to Modern Marvels: Explore Delhi with Me</h3>
            <span className='fixed mt-10 ml-[114px] text-sm font-semibold'>+91 8864391782               |</span>
            <span className='fixed mt-10 ml-[234px] text-sm font-semibold'>vihaanahuja24@gmail.com</span>
            <button className='fixed -mt-10 -ml-14 hover:scale-150 rounded' onClick={handleLeftArrow}>
              <img src={leftarrow} className='w-5 h-5 rounded'/>
            </button>
        </div>   
    </div>
    
  )
}

export default GuidePag1