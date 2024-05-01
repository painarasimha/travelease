import React, { useState } from 'react';
import BGImg from '../assets/loginformbg.jpg'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const switchToLogin = () => {
    navigate('/login'); // Replace with your actual login route path
  };

  const switchToSignup = () => {
    navigate('/signup');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Clear any previous errors

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      toast.error(errorMessage,{
        position: 'bottom-right',
        autoClose: 2200,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      userCredential.user.displayName = firstName + " " + lastName
      userCredential.user.phoneNumber = phoneNo

      toast.success('Signed Up Successfully!',{
        position: 'bottom-right',
        autoClose: 2200,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      });
      console.log('User signed up:', userCredential.user);

      // Add user data (first name, last name, phone number) to database (optional)
      const user = userCredential.user;
      // const db = getFirestore(app); // Assuming you're using Firestore
      // await db.collection('users').doc(user.uid).set({
      //   firstName,
      //   lastName,
      //   phoneNo,
      // });

      navigate('/');

      // Redirect to a success page or display confirmation message
    } catch (error) {
      setErrorMessage(error.message); // Display error message to user
      toast.error(errorMessage,{
        position: 'bottom-right',
        autoClose: 2200,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8" style={{backgroundImage: `url(${BGImg})`}}>
      <div className="max-w-md space-y-5 w-[480px] h-[600px] py-2 px-5 -mt-8 bg-white rounded-2xl shadow-md shadow-black">
        <div className='flex space-x-8 ml-[110px] mb-10 mt-5'>
          <div className='hover:scale-150 rounded-xl w-14 px-2 text-lg'><button className='font-bold cursor-pointer' onClick={switchToLogin}>Login</button></div>
          <div className='bg-purple-600 rounded-xl w-20 px-[8px] text-lg'><button className='font-bold cursor-pointer' onClick={switchToSignup}>Signup</button></div>
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
              onChange={(e)=>{
                setFirstName(e.target.value)
                
              }}
              value={firstName}
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
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              value={lastName}
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
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
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
              onChange={(e) => {
                setPhoneNo(e.target.value)
              }}
              value={phoneNo}
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
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
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
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
              value={confirmPassword}
            />
          </div>
          <button className='w-20 bg-[#57a93b] py-2 px-3 rounded-xl hover:bg-[#386a27] font-bold' onClick={handleSignUp}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
