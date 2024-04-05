import React, {useState} from "react";
import Img5 from '../assets/image1.jpg';
import ProfileImg from '../assets/profile.jpg'

function ProfilePage({ firstName = 'Narasimha', lastName = 'Pai', badgeName = 'Beginner Badge'}) {
  const [progress, setProgress] = useState(73);

  const handleProgressChange = (event) => {
    const newProgress = parseInt(event.target.value);
     const validProgress = Math.min(Math.max(newProgress, 0), 100);
  };
  
  return (
    <div className="profile-container h-screen bg-cover px-8 pt-20 pb-8 " style={{ backgroundImage: `url(${Img5})` }}>
      <div className="overlay fixed top-[calc(100px + 1rem)] left-1/2 transform -translate-x-1/2 py-8 px-12 rounded-md w-[1160px] h-[520px] bg-gray-300 opacity-70"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center -left-1/2">
        <img src={ProfileImg} alt="Profile Picture" className="w-64 h-64 fixed rounded-full mb-4 border-2 border-black" />
        <h1 className="text-2xl font-black mt-72 fixed text-black">{firstName} {lastName}</h1>
        <div className="badge-container flex flex-col items-center fixed">
          <span className="text-base font-bold mt-[396px]  text-gray-800">{badgeName}</span>
          <div className="progress-bar bg-gray-200 h-2 rounded-full overflow-hidden w-full mt-2">
            {/* Progress bar with dynamic width */}
            <div className="progress bg-green-700 h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="text-sm text-black font-bold mt-1">{100-progress}% to Next Level</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
