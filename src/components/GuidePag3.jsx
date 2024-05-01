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
        <div className='w-[1260px] h-[590px] fixed bg-[#606421] rounded-3xl shadow-inner shadow-black py-8'>
        <div className='py-16 px-20'>
            <h1 className='text-2xl mt-16 ml-5 font-bold'>Description</h1>
            <p className='text-lg ml-5 text-black font-semibold py-2'>Jaipur, the vibrant capital of Rajasthan, is known as the "Pink City" for its distinctive pink-hued buildings and historic forts. 
            Visitors can immerse themselves in its rich heritage by exploring majestic palaces, bustling bazaars, and intricate architecture</p>
            <h1 className='text-2xl font-bold mt-4 ml-5'>Travel Plan</h1>
            <div className='grid gap-x-5 grid-cols-4 ml-5'>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 1</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Amber Fort</li>
                <li>City Palace</li>
                <li>Jantar Mantar</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 2</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Johari Bazaar and Bapu Bazaar</li>
                <li> architectural marvel of Hawa Mahal</li>
                <li>serene surroundings of Sisodia Rani Garden</li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold mt-4 ml-3'>Day 3</h2>
              <ul className='marker:text-green space-y-4 list-inside list-disc font-bold ml-3 mt-3'>
                <li>Albert Hall Museum</li>
                <li>Nahargarh Fort</li>
                <li>Jaigarh Fort</li>
                <li>Stepwell of Panna Meena Kund</li>
              </ul>
            </div>
          </div>
          </div>  
        </div>
        <div className='absolute inset-0 flex py-48 px-52'>
            <img src={GuideProfile3} alt="guide1profile" className='w-24 h-24 fixed rounded-full border-4 -mt-6 border-black object-cover'/>
            <h1 className="text-2xl font-black ml-28 -mt-3 fixed text-black">{firstName} {lastName}</h1>
            <h3 className='fixed mt-5 ml-[116px] font-semibold'>Experience Jaipur's Majesty Through My Local Lens</h3>
            <span className='fixed mt-10 ml-[114px] text-sm font-semibold'>+91 9834572231              <b className='font-black'>|</b></span>
            <span className='fixed mt-10 ml-[234px] text-sm font-semibold'>ArushiAgarwal@gmail.com</span>
            <button className='fixed -mt-10 -ml-14 hover:scale-150 rounded' onClick={handleLeftArrow}>
              <img src={leftarrow} className='w-5 h-5 rounded'/>
            </button>
        </div>   
    </div>
    
  )
}

export default GuidePag3