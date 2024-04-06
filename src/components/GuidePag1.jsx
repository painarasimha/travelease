import React from 'react'
import Img2 from '../assets/image5.jpg'
import GuideProfile1 from '../assets/profile.jpg'

function GuidePag1({firstName = 'Narasimha', lastName = 'Pai'}) {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
        <div className='w-[1260px] h-[590px] bg-gray-700 rounded-3xl opacity-75 shadow-inner shadow-white'>
            <div className='w-20 h-20 bg-gray-500 ml-64'>
                
            </div>
        </div>
        <div className='absolute inset-0 flex py-48 px-52'>
            <img src={GuideProfile1} alt="guide1profile" className='w-48 h-48 fixed rounded-full'/>
            <h1 className="text-2xl font-black fixed text-black mt-52 ml-4">{firstName} {lastName}</h1>
            <div className='absolute w-[2px] h-[590px] ml-64 mt-[-60px] bg-black'></div>
        </div>   
    </div>
    
  )
}

export default GuidePag1;


{/*<div className="absolute inset-0 flex items-center justify-center -left-1/2">
            <img src={GuideProfile1} alt="Profile Picture" className="w-40 h-40 fixed rounded-full mb-2 border-2 border-black" />
            <h1 className="text-2xl font-black fixed text-black">{firstName} {lastName}</h1>

            
</div>*/}