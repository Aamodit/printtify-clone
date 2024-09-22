import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700">We're here to help! Reach out with any questions.</p>
      </div>
      <div className="max-w-md mx-auto mb-8">
        <form>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" aria-label="Facebook">
          <FaFacebookF className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
        <a href="#" aria-label="Pinterest">
          <FaPinterestP className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
        <a href="#" aria-label="YouTube">
          <FaYoutube className="w-5 h-5 text-gray-700 hover:text-green-500" />
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
