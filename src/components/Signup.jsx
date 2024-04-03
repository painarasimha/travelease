import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h1 className="text-xl font-bold text-center">Sign Up</h1>
      <input
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={handleChange}
      />
      <input
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
