import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slogans = [
  "Get loans using your vehicle as equity",
  "Fast, secure & trustworthy service",
  "Low credit score? No problem!",
  "Quick approval. No hassle.",
];

const Home = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background Blur Gradient */}
      <div className="absolute -z-10 inset-0 flex justify-center items-start">
        <div className="w-[60vw] h-[200vh] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 opacity-20 blur-[140px]"></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 text-center px-4 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to <span className="text-yellow-300">Today Home Credits</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium min-h-[3rem] transition-opacity duration-700 ease-in-out animate-fade">
            {slogans[currentSlogan]}
          </p>
          <Link
            to="/apply"
            className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            We Offer These Types of Loans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚗",
                title: "Vehicle Equity Loan",
                desc: "Use your existing car, bike, or scooter as collateral and get instant cash."
              },
              {
                icon: "💼",
                title: "Business Use Loan",
                desc: "Need funds for business but only have a vehicle? Use it as equity!"
              },
              {
                icon: "📉",
                title: "Low Credit Score? No Problem",
                desc: "Get a loan even if your credit score is low — your vehicle backs you up."
              },
            ].map((loan, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 transform hover:scale-[1.03] transition duration-300 border-t-4 border-blue-600">
                <div className="text-4xl mb-4">{loan.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{loan.title}</h3>
                <p className="text-gray-700">{loan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-800 to-blue-900 p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-yellow-300">
            Get in Touch With Us
          </h2>
          <p className="text-center mb-10 text-gray-100">
            Whether you have a question about our services, the loan process, or anything else,
            our team is here to help you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-800 rounded-xl p-6 border border-blue-600 shadow hover:scale-105 transition">
              <p className="text-lg font-semibold mb-1 text-yellow-200">📞 Call Us</p>
              <p className="text-white">+91 9445676300</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 border border-blue-600 shadow hover:scale-105 transition">
              <p className="text-lg font-semibold mb-1 text-yellow-200">📧 Email</p>
              <p className="text-white">support@todayhomecredits.com</p>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 border border-blue-600 shadow hover:scale-105 transition">
              <p className="text-lg font-semibold mb-1 text-yellow-200">📍 Location</p>
              <p className="text-white">Kodungallur, Kerala</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full transition shadow"
            >
              Contact Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
