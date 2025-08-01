// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center animate-text-glow">
          About Today Home Credits
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          At <span className="font-semibold text-blue-700">Today Home Credits</span>, we empower individuals and small business owners to access quick and secure loans using their existing vehicles as equity.
          Our services are ideal for those who need immediate financial assistance without selling their assets.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          Whether it's a car, bike, or commercial vehicle, we help you unlock the value of your owned vehicle to meet your urgent needs. Our process is transparent, fast, and trustworthy—ensuring that you retain ownership while getting the liquidity you need.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          We are based in Kochi, Kerala, and have built our reputation by providing professional and customer-friendly services with minimal documentation and fast disbursals.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Choose Today Home Credits and take the first step toward financial flexibility—without parting with your vehicle.
        </p>
      </div>
    </div>
  );
};

export default About;
