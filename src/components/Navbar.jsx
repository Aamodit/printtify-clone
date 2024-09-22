import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logo from '/public/images/printify-logo.png';

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Printify Logo" className="w-36 h-auto" />
      </div>
      <ul className="flex space-x-6">
        <li>Catalog</li>
        <li className="relative group">
          How it works <FaChevronDown className="inline-block" />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
            <li className="px-4 py-2 hover:bg-gray-100">How Printify Works</li>
            <li className="px-4 py-2 hover:bg-gray-100">Print On Demand</li>
            <li className="px-4 py-2 hover:bg-gray-100">Printify Quality Promise</li>
            <li className="px-4 py-2 hover:bg-gray-100">What to Sell?</li>
          </ul>
        </li>
        <li className="relative group">
          Services <FaChevronDown className="inline-block" />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
            <li className="px-4 py-2 hover:bg-gray-100">Printify Studio</li>
            <li className="px-4 py-2 hover:bg-gray-100">Printify Express Delivery</li>
            <li className="px-4 py-2 hover:bg-gray-100">Transfer Products</li>
            <li className="px-4 py-2 hover:bg-gray-100">Order In Bulk</li>
            <li className="px-4 py-2 hover:bg-gray-100">Experts Program</li>
          </ul>
        </li>
        <li className="relative group">
          Use Cases <FaChevronDown className="inline-block" />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
            <li className="px-4 py-2 hover:bg-gray-100">Merch for Fans</li>
            <li className="px-4 py-2 hover:bg-gray-100">Merch for eCommerce</li>
            <li className="px-4 py-2 hover:bg-gray-100">Merch for Enterprises</li>
            <li className="px-4 py-2 hover:bg-gray-100">Grow Your Store</li>
          </ul>
        </li>
        <li className="relative group">
          Need Help? <FaChevronDown className="inline-block" />
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
            <li className="px-4 py-2 hover:bg-gray-100">Help Center</li>
            <li className="px-4 py-2 hover:bg-gray-100">Contacts</li>
            <li className="px-4 py-2 hover:bg-gray-100">My Requests</li>
          </ul>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button className="border px-4 py-2">Login</button>
        <button className="bg-green-500 text-white px-6 py-2">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
