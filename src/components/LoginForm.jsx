import React, { useState } from 'react';
import BGImg from '../assets/loginformbg.jpg'
import { useNavigate } from 'react-router-dom';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const LoginForm = () => {

  const navigate = useNavigate();

  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // User logged in successfully
      console.log("Logged In Successfully!");
      console.log(user)
      // Redirect to desired page after successful login (optional)
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login Error:", error.message);
      if (error.message.includes("wrong-password")){
        toast.error("Incorrect password. Please try again.")
      }
      setError(error.message); // Set error message for display
    }
    navigate("/travelpage")
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className='h-screen bg-cover bg-center flex items-center justify-center ' style={{backgroundImage: `url(${BGImg})`}}>
      <div className=" w-[440px] h-[450px] bg-white rounded-2xl shadow-md shadow-black -mt-20 py-10 px-10">
        <div className='flex space-x-5 ml-[100px] mb-10'>
          <div className='bg-purple-600  rounded-xl w-16 px-2 text-lg'><button className='font-bold cursor-pointer' onClick={handleLogin}>Login</button></div>
          <div className='hover:scale-150 rounded-xl w-16 px-[6px] text-lg'><button className='font-bold cursor-pointer' onClick={handleSignup}>Signup</button></div>
        </div>
        <form className="space-y-8" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 border shadow-inner shadow-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-black mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 border shadow-inner shadow-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" name="remember-me" className="h-5 w-5 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50" />
              <label htmlFor="remember-me" className="text-sm ml-2 text-black">
                Remember Me
              </label>
            </div>
          </div>
          <button className='w-20 h-10 bg-[#57a93b] py-2 px-3 rounded-xl hover:bg-[#386a27] font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
