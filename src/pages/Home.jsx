import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[80vh] flex items-center justify-center px-6 bg-blue-900 text-white">
        <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-900 opacity-80" />
        <div className="relative z-10 text-center max-w-3xl space-y-6 animate-fade-slide">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Vehicle Loans Made Simple
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Fast approvals. Easy EMIs. Trusted by thousands.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-blue-800 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-700">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Quick Approvals',
              text: 'Apply online and get quick loan approvals with minimal documentation.',
            },
            {
              title: 'Lowest Interest Rates',
              text: 'We offer market-best interest rates to make your EMI affordable.',
            },
            {
              title: 'Trusted Service',
              text: 'Thousands of customers have chosen us as their vehicle finance partner.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
