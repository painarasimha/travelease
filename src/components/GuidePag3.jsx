import React from 'react'
import Img2 from '../assets/image5.jpg'
import leftarrow from '../assets/leftarrow.svg'
import GuideProfile3 from '../assets/prof3.jpg'
import { useNavigate } from 'react-router-dom';

function GuidePag3({firstName = 'Arushi', lastName = 'Agarwal'}) {
  const navigate = useNavigate();

  const handleLeftArrow = () =>{
    navigate('/travelpage')
  }
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
        <div className='w-[1260px] h-[590px] fixed bg-[#d7baad] rounded-3xl shadow-inner shadow-black py-8'>
          <div className='w-[835px] h-[530px] bg-[#F5F5DC] ml-[380px] rounded-xl p-4 border-2 border-black shadow-sm shadow-black overflow-y-auto'>
            <h1 className='text-2xl font-bold'>Description</h1>
            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi in adipisci animi maiores incidunt aut ratione eius cum 
              porro fugit tempora vel quae, quia quam suscipit iste quod dolorum? Cupiditate.</p>
            <h1 className='text-2xl font-bold mt-4'>Travel Plan</h1>
            <h2 className='text-xl font-medium mt-4 ml-3'>Day 1</h2>
            <ul className=' marker:text-green list-inside list-disc ml-3 mt-3'>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
            </ul>
            <h2 className='text-xl font-medium mt-4 ml-3'>Day 2</h2>
            <ul className=' marker:text-green list-inside list-disc ml-3 mt-3'>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
            </ul>
            <h2 className='text-xl font-medium mt-4 ml-3'>Day 3</h2>
            <ul className=' marker:text-green list-inside list-disc ml-3 mt-3'>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
            </ul>
            <h2 className='text-xl font-medium mt-4 ml-3'>Day 4</h2>
            <ul className=' marker:text-green list-inside list-disc ml-3 mt-3'>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
              <li>Hehe</li>
            </ul>
          </div>
        </div>
        <div className='absolute inset-0 flex py-48 px-52'>
            <img src={GuideProfile3} alt="guide1profile" className='w-48 h-48 fixed rounded-full border-4 border-black object-cover'/>
            <h1 className="text-2xl font-black fixed text-black mt-52 ml-3">{firstName} {lastName}</h1>
            <div className='w-[2px] fixed h-[590px] ml-64 mt-[-60px] bg-black'></div>
            <button className='fixed -mt-10 -ml-14 hover:scale-150 rounded ' onClick={handleLeftArrow}>
              <img src={leftarrow} className='w-8 h-8 rounded'/>
            </button>
        </div>   
    </div>
    
  )
}

export default GuidePag3