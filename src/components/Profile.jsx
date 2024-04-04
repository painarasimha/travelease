import React, { useState } from "react";

function ProfilePage({ firstName = '', lastName = '', email = '', username = '', mobileNumber = '' }) {
  const [userInfo, setUserInfo] = useState({
    firstName,
    lastName,
    email,
    username,
    mobileNumber,
  });

  const handleInputChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div className="profile-container bg-black bg-cover bg-center">
      <div className="profile-page">
        <hr className="border border-gray-200" />
        <h1 className="text-4xl font-sans text-white text-center">Profile</h1>
        <hr className="border border-gray-200" />

        <div className="flex items-center mb-8">
          <img src="https://via.placeholder.com/100" alt="img description" className="rounded-full w-48 h-48 mx-auto" />
          <div className="user-info-container px-8 py-4 ml-4 bg-gray-100 rounded-lg">
            <input
              type="text"
              className="w-full h-10 px-4 py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleInputChange}
              placeholder="Enter your First Name"
            />
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleInputChange}
              placeholder="Enter your Last Name"
            />
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              placeholder="Enter your Username"
            />
            <br />
            <input
              type="email"
              className="w-full h-10 px-4 py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
            />
            <br />
            <input
              type="text"
              className="w-full h-10 px-4 py-2 rounded-md text-center border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              name="mobileNumber"
              value={userInfo.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter your Mobile Number"
            />
          </div>
        </div>
        <button className="log-out-button text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-auto mt-4">Log Out</button>
        <hr className="border border-gray-200" />
      </div>
    </div>
  );
}

export default ProfilePage;
