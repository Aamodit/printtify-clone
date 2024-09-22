import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="w-1/4">
            <h3 className="font-bold mb-4">Products</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Printify Studio</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Printify Express Delivery</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Transfer Products</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Order In Bulk</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Experts Program</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Getting Started</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Affiliate Program</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Developers API</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Printify Community</a></li>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#"><FaFacebookF className="text-green-500" /></a>
              <a href="#"><FaInstagram className="text-green-500" /></a>
              <a href="#"><FaTwitter className="text-green-500" /></a>
              <a href="#"><FaLinkedinIn className="text-green-500" /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; {new Date().getFullYear()} Printify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
