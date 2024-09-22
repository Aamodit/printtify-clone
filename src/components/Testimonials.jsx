import React from 'react';

function Testimonials() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="text-gray-600">"Printify has transformed my business!"</p>
            <p className="mt-4 text-right font-bold">- John Doe</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="text-gray-600">"The best platform for print-on-demand."</p>
            <p className="mt-4 text-right font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
