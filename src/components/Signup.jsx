import React, { useState } from 'react';
import BGImg from '../assets/loginformbg.jpg'
import { useNavigate } from 'react-router-dom'
import { FileSaver } from 'file-saver';
 
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    navigate('/login'); // Replace with your actual login route path
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const csvData = `${formData.firstName},${formData.lastName},${formData.email},${formData.phoneNo}`; // Add hashed password if needed

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    FileSaver.saveAs(blob, 'signup_data.csv');

    console.log('Signup data (for testing only):', formData); // Log data for verification
    // Handle successful signup (e.g., display success message)
  };

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8" style={{backgroundImage: `url(${BGImg})`}}>
      <div className="max-w-md space-y-5 w-[480px] h-[600px] py-2 px-5 -mt-8 bg-white rounded-2xl shadow-md shadow-black">
        <div className='flex space-x-8 ml-[110px] mb-10 mt-5'>
          <div className='hover:scale-150 rounded-xl w-14 px-2 text-lg'><button className='font-bold cursor-pointer' onClick={handleLogin}>Login</button></div>
          <div className='bg-purple-600 rounded-xl w-20 px-[8px] text-lg'><button className='font-bold cursor-pointer' onClick={handleSignup}>Signup</button></div>
        </div>
        <form className="space-y-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel" // Use "tel" input type for phone numbers
              name="phoneNo"
              id="phoneNo"
              autoComplete="tel"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.phoneNo}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  bg-gray-300 shadow-inner shadow-gray-500 border-gray-300 px-3 py-2"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <button className='w-20 bg-[#57a93b] py-2 px-3 rounded-xl hover:bg-[#386a27] font-bold' onSubmit={handleSignupSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
