import React from 'react';
import TshirtCarousel from './TshirtCarousel';

function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 flex items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Create and sell custom products
          </h1>
          <ul className="space-y-4 text-lg text-gray-700 mb-8">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              100% Free to use
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              900+ High-Quality Products
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Largest global print network
            </li>
          </ul>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
              Start for Free
            </a>
            <a href="#" className="flex items-center text-gray-800 px-4 py-3 border border-gray-300 rounded hover:border-green-500 hover:text-green-500">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.752 11.168l-6.96-4.01a.75.75 0 00-1.122.654v8.375a.75.75 0 001.122.654l6.96-4.01a.75.75 0 000-1.308z"></path>
                </svg>
              </div>
              <span className="ml-2">How It Works?</span>
            </a>
          </div>
          <p className="text-green-500 text-lg">
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div className="w-1/2">
          <TshirtCarousel />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
