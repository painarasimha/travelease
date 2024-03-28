import React from 'react';

const HomePage = () => {
  return (
    <div className="container flex h-screen">
      <img className="w-1/2 object-cover" src="src/assets/image5.jpg" alt="Website Image" />
      <div className="text-content w-1/2 p-10">
        <h1 className="text-3xl mb-10">Welcome to My Website!</h1>
        <p className="text-lg mb-10">
          This is a brief description of your website and what it offers. You can add more details about your services, products, or your company's mission. Make sure to keep the text concise and engaging.
        </p>
        <a href="#" className="text-white bg-green-500 py-2 px-4 rounded-md hover:bg-green-700">Get Started</a>
      </div>
    </div>
  );
};

export default HomePage;
