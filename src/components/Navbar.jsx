import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#002F6C]">
            Today Home Credits
          </h1>
          <p className="text-sm text-gray-600">Vehicle Loans Made Easy</p>
        </div>
        <div className="text-right hidden md:block">
          <div>
            <span className="text-gray-700 font-medium">Email:</span> info@todayhomecredits.com
          </div>
          <div>
            <span className="text-gray-700 font-medium">Toll-Free:</span> 1800‑123‑4567
          </div>
        </div>
      </div>
      <nav className="bg-[#002F6C]">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4">
          <ul className="flex space-x-6 text-white font-medium">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300">Our Services</Link></li>
            <li><Link to="/apply" className="hover:text-yellow-300">Apply Now</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
