import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '/public/images/printify-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Function to close the menu
  };

  return (
    <>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Option icon (menu) */}
          <div className="md:hidden mr-4 cursor-pointer" onClick={toggleMobileMenu}>
            <FaBars className="text-green-500" size={24} />
          </div>
          <img src={logo} alt="Printify Logo" className="w-36 h-auto" />
        </div>
        
        {/* Navbar menu items for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <li>Catalog</li>
          <li className="relative group">
            How it works <FaChevronDown className="inline-block" />
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
              <li className="px-4 py-2 hover:bg-gray-100">How Printify Works</li>
              <li className="px-4 py-2 hover:bg-gray-100">Print On Demand</li>
              <li className="px-4 py-2 hover:bg-gray-100">Printify Quality Promise</li>
              <li className="px-4 py-2 hover:bg-gray-100">What to Sell?</li>
            </ul>
          </li>
          <li>Pricing</li>
          <li>Blog</li>
          <li className="relative group">
            Services <FaChevronDown className="inline-block" />
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
              <li className="px-4 py-2 hover:bg-gray-100">Printify Studio</li>
              <li className="px-4 py-2 hover:bg-gray-100">Printify Express Delivery</li>
              <li className="px-4 py-2 hover:bg-gray-100">Transfer Products</li>
              <li className="px-4 py-2 hover:bg-gray-100">Order In Bulk</li>
              <li className="px-4 py-2 hover:bg-gray-100">Experts Program</li>
            </ul>
          </li>
          <li className="relative group">
            Use Cases <FaChevronDown className="inline-block" />
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
              <li className="px-4 py-2 hover:bg-gray-100">Merch for Fans</li>
              <li className="px-4 py-2 hover:bg-gray-100">Merch for eCommerce</li>
              <li className="px-4 py-2 hover:bg-gray-100">Merch for Enterprises</li>
              <li className="px-4 py-2 hover:bg-gray-100">Grow Your Store</li>
            </ul>
          </li>
          <li className="relative group">
            Need Help? <FaChevronDown className="inline-block" />
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
              <li className="px-4 py-2 hover:bg-gray-100">Help Center</li>
              <li className="px-4 py-2 hover:bg-gray-100">Contacts</li>
              <li className="px-4 py-2 hover:bg-gray-100">My Requests</li>
            </ul>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="border px-4 py-2">Login</button>
          <button className="bg-green-500 text-white px-6 py-2">Sign Up</button>
        </div>
      </nav>

      {/* Mobile menu - Sliding in from the left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close icon */}
        <div className="flex justify-end p-4">
          <FaTimes className="text-green-500 cursor-pointer" size={24} onClick={closeMobileMenu} />
        </div>
        
        <ul className="space-y-4 p-6">
          <li className="border-b pb-2">Catalog</li>
          <li className="border-b pb-2">How it works</li>
          <li className="border-b pb-2">Pricing</li>
          <li className="border-b pb-2">Blog</li>
          <li className="border-b pb-2">Services</li>
          <li className="border-b pb-2">Use Cases</li>
          <li>Need Help?</li>
        </ul>
      </div>
      
      {/* Overlay to close the menu when clicking outside */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeMobileMenu}></div>
      )}
    </>
  );
};

export default Navbar;
