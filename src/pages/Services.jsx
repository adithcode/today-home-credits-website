// src/pages/Services.jsx
import React from 'react';

const services = [
  {
    title: 'Two-Wheeler Loans',
    description: 'Affordable two-wheeler loans with minimal documentation.',
    icon: '🏍️',
  },
  {
    title: 'Four-Wheeler Loans',
    description: 'Get instant approval on car loans with competitive rates.',
    icon: '🚗',
  },
  {
    title: 'Refinancing',
    description: 'Lower your EMIs by refinancing your existing vehicle loan.',
    icon: '🔁',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6 animate-pulse">Our Services</h2>
        <p className="text-lg mb-12 text-gray-700">Tailored financial solutions to drive your dreams.</p>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 border border-blue-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
