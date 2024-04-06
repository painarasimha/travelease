import React from 'react'
import Img2 from '../assets/image5.jpg'
import GuideProfile1 from '../assets/profile.jpg'

function GuidePag1({firstName = 'Narasimha', lastName = 'Pai'}) {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center py-14 px-[130px]" style={{ backgroundImage: `url(${Img2})` }}>
        <div className='w-[1260px] h-[590px] bg-gray-700 rounded-3xl opacity-75 shadow-inner shadow-white py-14'>
          <div className='w-[790px] h-[480px] bg-gray-500 ml-[400px] rounded-3xl opacity-90 shadow-inner shadow-white'>

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

export default GuidePag1