import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      image: "/images/feature-photo1.svg",
      title: "Higher Profits",
      description:
        "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    },
    {
      image: "/images/feature-photo2.svg",
      title: "Robust Scaling",
      description:
        "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
    },
    {
      image: "/images/feature-photo3.svg",
      title: "Best Selection",
      description:
        "With 900+ products and top quality brands, you can choose the best products for your business.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
