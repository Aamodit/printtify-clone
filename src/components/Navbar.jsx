import React from 'react';
import logo from '/public/images/printify-logo.png';

function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Printify Logo" className="w-36 h-auto" />
      </div>
      <ul className="flex space-x-6">
        <li>Catalog</li>
        <li className="relative group">
          <span>How It Works</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg">
            <li>How Printify Works</li>
            <li>Print On Demand</li>
            <li>Printify Quality Promise</li>
            <li>What to Sell?</li>
          </ul>
        </li>
        <li>Pricing</li>
        <li>Blog</li>
        <li className="relative group">
          <span>Services</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg">
            <li>Printify Studio</li>
            <li>Printify Express Delivery</li>
            <li>Transfer Products</li>
            <li>Order In Bulk</li>
            <li>Experts Program</li>
          </ul>
        </li>
        <li className="relative group">
          <span>Use Cases</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg">
            <li>Merch for Fans</li>
            <li>Merch for eCommerce</li>
            <li>Merch for Enterprises</li>
            <li>Grow Your Store</li>
          </ul>
        </li>
        <li className="relative group">
          <span>Need Help?</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg">
            <li>Help Center</li>
            <li>Contacts</li>
            <li>My Requests</li>
          </ul>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button className="border px-4 py-2">Login</button>
        <button className="bg-green-500 text-white px-6 py-2">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
