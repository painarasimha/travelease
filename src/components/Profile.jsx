import React, {useState} from "react";
import Img5 from '../assets/image1.jpg';
import ProfileImg from '../assets/profile1.jpg'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage({ firstName = 'Narasimha', lastName = 'Pai', badgeName = 'Beginner Badge'}) {
  const [progress, setProgress] = useState(57);

  const navigate = useNavigate();

  const handleProgressChange = (event) => {
    const newProgress = parseInt(event.target.value);
     const validProgress = Math.min(Math.max(newProgress, 0), 100);
  };

  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Sign-out successful
      console.log("Signed Out Successfully!");
      navigate('/');
      // You can redirect to login page here (optional)
      // window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  };
  
  return (
    <div className="profile-container h-screen bg-cover px-8 pt-20 pb-8 " style={{ backgroundImage: `url(${Img5})` }}>
      <div className="overlay fixed top-[calc(40px + 1rem)] left-1/2 transform -translate-x-1/2 py-8 px-12 rounded-3xl shadow-md shadow-black w-[800px] h-[480px] bg-[#7d8321]"></div>
      <div className="absolute inset-0 flex flex-col items-center -left-1/2">
        <img src={ProfileImg} alt="Profile Picture" className="mt-[200px] w-56 h-56 fixed ml-72 rounded-full mb-4 border-2 border-black" />
        <div className="badge-container ml-[300px] flex flex-col items-center fixed">
          <span className="text-base font-bold mt-[440px]  text-white">{badgeName}</span>
          <div className="progress-bar bg-gray-200 h-2 rounded-full overflow-hidden w-full mt-2">
            {/* Progress bar with dynamic width */}
            <div className="progress bg-green-800 h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="text-sm text-black font-bold mt-1">{100-progress}% to Next Level</span>
        </div>
        <h1 className="text-2xl font-black mt-[250px] ml-[750px] fixed text-black">{firstName} {lastName}</h1>
        <button className="fixed ml-[300px] mt-[530px] px-4 py-2 bg-green-900 shadow-inner shadow-slate-500 text-white rounded-md hover:bg-green-700 focus:outline-none" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
