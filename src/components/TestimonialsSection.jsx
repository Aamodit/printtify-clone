import React from 'react';

function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Users Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6">
            <img src="/images/testm-img.jpg" alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 mb-4">“Printify has transformed my business! The ease of use and quality of products is unmatched.”</p>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-gray-500">Small Business Owner</p>
          </div>
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6">
            <img src="/images/testm-img.jpg" alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 mb-4">“The customer service is fantastic! I highly recommend Printify.”</p>
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-gray-500">E-commerce Entrepreneur</p>
          </div>
          <div className="max-w-xs bg-white rounded-lg shadow-lg p-6">
            <img src="/images/testm-img.jpg" alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 mb-4">“I love the variety of products and the quality is top-notch.”</p>
            <h3 className="font-semibold">Emily Johnson</h3>
            <p className="text-gray-500">Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
