import React from 'react'
import Img1 from '../assets/image2.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'
import { toast, Bounce } from 'react-toastify';


const ProfileDiv = ({ options }) => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleGetStarted = () => {
        navigate('/login'); // Replace with your actual login route path
      };
    
      const handleLogout = async () => {
        try {
          await signOut(auth);
          // Sign-out successful
          console.log("Signed Out Successfully!");
          // You can redirect to login page here (optional)
          // window.location.href = "/login";
        } catch (error) {
          console.error("Error signing out:", error);
          // Handle errors appropriately (e.g., display an error message to the user)
        }
      };

    return (
        <div className="container flex h-screen ">
            <div className="background-image w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Img1})` }}>
                <div className='ml-[1345px] mr-12 grid grid-rows-3 bg-white -mt-3 rounded-lg shadow-sm shadow-black'>
                    <span className='horizontal py-2 text-lg font-semibold'>My Account</span>
                    <Link to = '/profile' className='rounded-sm py-2 cursor-pointer'>Profile</Link>
                    <span className='rounded-sm py-2 cursor-pointer' onClick={handleLogout}>Logout</span>
                </div>
                <div className="hero-text absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pt-[15px] w-[750px]">
                    <h1 className='text-5xl text-black font-extrabold mb-2'> Welcome to TravelEase!</h1>
                    <h4 className='text-base text-black font-semibold mb-4'>
                        Unforgettable Experiences Await: Let TravelEase Be Your Itinerary Guru.
                    </h4>
                    <p className='text-lg text-black font-medium mb-8 mt-10'>
                        Don't waste time researching endless options. Our travel experts curate unique experiences, from hidden gems to must-see attractions, ensuring you make the most of your time.
                    </p>
                    <button className='text-white font-semibold bg-[#57a93b] py-2 px-4 rounded-md hover:bg-[#386a27] text-center' onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDiv
