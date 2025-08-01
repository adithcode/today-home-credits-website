// src/pages/Apply.jsx
import React from 'react';

const Apply = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4 flex items-center justify-center text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 animate-pulse">
          Apply for a Loan
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Vehicle Type (Car, Bike...)"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Additional Details"
              rows="4"
              className="w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
