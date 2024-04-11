import React, { useState } from 'react';
import BGImg from '../assets/loginformbg.jpg'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // 'login' or 'signup'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic based on the current mode
    if (mode === 'login') {
      // Handle login logic
      console.log('Login');
    } else {
      // Handle signup logic
      console.log('Signup');
    }
  };

  const handleSwitchMode = () => {
    // Toggle between login and signup modes
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  return (
    <div className='h-screen bg-cover bg-center py-36 px-[570px]' style={{backgroundImage: `url(${BGImg})`}}>
      <div className="w-96 h-92 bg-white rounded-lg shadow-sm shadow-black py-10 px-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2">
              Username/Phone Number
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" name="remember-me" className="h-5 w-5 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50" />
              <label htmlFor="remember-me" className="text-sm ml-2 text-gray-700">
                Remember Me
              </label>
            </div>
            <button type="button" onClick={handleSwitchMode} className="text-sm text-indigo-600 hover:underline focus:outline-none">
              {mode === 'login' ? 'Signup' : 'Login'}
            </button>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {mode === 'login' ? 'Login' : 'Signup'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
