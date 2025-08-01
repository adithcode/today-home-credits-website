import React from 'react';

const Apply = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Apply for a Loan</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Vehicle Type (Car, Bike...)"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Additional Details"
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded font-semibold hover:bg-blue-900"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
