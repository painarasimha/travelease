import React from 'react'
import Img2 from '../assets/image5.jpg'
import leftarrow from '../assets/leftarrow.svg'
import GuideProfile4 from '../assets/prof4.jpg'
import { useNavigate } from 'react-router-dom';

function GuidePag4({firstName = 'Ishaan', lastName = 'Batra'}) {
  const navigate = useNavigate();

  const handleLeftArrow = () =>{
    navigate('/travelpage')
  }
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
        <div className='w-[1260px] h-[590px] fixed bg-[#606421] rounded-3xl shadow-inner shadow-black py-8'>
        <div className='py-16 px-20'>
            <h1 className='text-2xl mt-16 ml-5 font-bold'>Description</h1>
            <p className='text-lg ml-5 text-black py-2 font-semibold'>Mumbai, the bustling metropolis on India's west coast, is the heart of Bollywood and a melting pot of cultures, cuisines, and contrasts. 
            From iconic landmarks like the Gateway of India to the vibrant street markets of Colaba Causeway, Mumbai offers a dynamic blend of history, entertainment, and diversity.</p>
            <h1 className='text-2xl font-bold mt-4 ml-5'>Travel Plan</h1>
            <div className='grid grid-cols-4 ml-5'>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 1</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Gateway of India</li>
                <li>Taj Mahal Palace Hotel</li>
                <li> Dhobi Ghat</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 2</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Elephanta Caves</li>
                <li>Bandra Fort</li>
                <li>Relax at Juhu Beach</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 3</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Tour of Film City</li>
                <li>Bollywood Walk of Fame</li>
                <li>Stroll along Marine Drive</li>
              </ul>
            </div>
          </div>
          </div>  
        </div>
        <div className='absolute inset-0 flex py-48 px-52'>
            <img src={GuideProfile4} alt="guide1profile" className='w-24 h-24 fixed rounded-full border-4 -mt-6 border-black object-cover'/>
            <h1 className="text-2xl font-black ml-28 -mt-3 fixed text-black">{firstName} {lastName}</h1>
            <h3 className='fixed mt-5 ml-[116px] font-semibold'>From Bollywood to Bazaars: Your Personalized Mumbai Guide.</h3>
            <button className='fixed -mt-10 -ml-14 hover:scale-150 rounded' onClick={handleLeftArrow}>
              <img src={leftarrow} className='w-5 h-5 rounded'/>
            </button>
        </div>   
    </div>
    
  )
}

export default GuidePag4