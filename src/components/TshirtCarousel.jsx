import React, { useState, useEffect } from 'react';

const TshirtCarousel = () => {
  const tshirtDesigns = [
    '/images/tshirt-design1.png',
    '/images/tshirt-design2.png',
    '/images/tshirt-design3.png',
    '/images/tshirt-design4.png'
  ];

  const [currentDesign, setCurrentDesign] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesign((prevDesign) => (prevDesign + 1) % tshirtDesigns.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tshirtDesigns.length]);

  return (
    <div className="relative w-full h-auto max-w-lg mx-auto">
      <img src="/public/images/white-tshirt-background.png" alt="T-shirt Background" className="w-full h-auto" />
      <img 
        src={tshirtDesigns[currentDesign]} 
        alt="T-shirt Design" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto" 
      />
    </div>
  );
};

export default TshirtCarousel;
