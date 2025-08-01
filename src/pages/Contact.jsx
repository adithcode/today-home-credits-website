// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4 py-16 text-gray-800">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4 animate-pulse">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Have questions? We're here to help.
        </p>

        <div className="text-center space-y-3 text-gray-700 text-lg">
          <p>📞 Phone: <span className="font-medium text-blue-900">+91 9446576300</span></p>
          <p>✉️ Email: <span className="font-medium text-blue-900">support@todayhomecredits.com</span></p>
          <p>🏢 Location: <span className="font-medium text-blue-900">Kodungallur, Kerala</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
