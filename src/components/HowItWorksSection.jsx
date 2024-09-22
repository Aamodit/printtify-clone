import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-10">
          How It Works
        </h2>
        <div className="flex justify-center space-x-12">
          <div className="text-center max-w-xs">
            <img
              src="/images/hiw-image1.webp"
              alt="Step 1"
              className="w-32 h-auto mb-4 mx-auto border rounded-full shadow-md"
            />
            <h3 className="text-green-500 text-xl font-semibold mb-2">
              Create
            </h3>
            <p className="text-black text-sm">
              Custom products: Easily add your designs to a wide range of
              products using our free tools.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <img
              src="/images/hiw-image2.webp"
              alt="Step 2"
              className="w-32 h-auto mb-4 mx-auto border rounded-full shadow-md"
            />
            <h3 className="text-green-500 text-xl font-semibold mb-2">Sell</h3>
            <p className="text-black text-sm">
              On your terms: You choose the products, sale price, and where to
              sell.
            </p>
          </div>

          <div className="text-center max-w-xs">
            <img
              src="/images/hiw-image3.webp"
              alt="Step 3"
              className="w-32 h-auto mb-4 mx-auto border rounded-full shadow-md"
            />
            <h3 className="text-green-500 text-xl font-semibold mb-2">
              We handle
            </h3>
            <p className="text-black text-sm">
              Fulfillment: Once an order is placed, we automatically handle all
              the printing and delivery logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
