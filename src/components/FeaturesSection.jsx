import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      image: '/public/images/feature1.png',
      title: 'Easy to Use',
      description: 'Create your store in minutes without any coding experience.'
    },
    {
      image: '/public/images/feature2.png',
      title: 'Quality Products',
      description: 'Choose from thousands of high-quality products to sell.'
    },
    {
      image: '/public/images/feature3.png',
      title: 'Global Shipping',
      description: 'Reach customers worldwide with our fast shipping options.'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
