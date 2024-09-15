import React, { useState } from 'react';

const specs = [
  {
    name: 'Armaspeed Cold Air Intake',
    description:
      'Enhances engine breathing for improved throttle response and horsepower gains.',
    imgSrc: '/images/intake.png',
    price: '$800',
  },
  {
    name: 'CTS Turbo Catless Downpipe',
    description:
      'Increases exhaust flow for better turbo performance and a more aggressive sound.',
    imgSrc: '/images/downpPipe.png',
    price: '$300',
  },
  {
    name: 'Tomei Dual Exit Exhaust',
    description:
      'Delivers a deep, resonant exhaust note with optimized exhaust flow.',
    imgSrc: '/images/exhaust.png',
    price: '$1700',
  },
  {
    name: 'HKS SQV4 Blow Off Valve',
    description:
      'Prevents compressor surge while delivering that signature blow-off sound.',
    imgSrc: '/images/valve.png',
    price: '$250',
  },
  {
    name: 'VR Performance Titanium Chargepipe',
    description:
      'A stronger and lighter alternative, improving turbo response and durability.',
    imgSrc: '/images/chargepipe.png',
    price: '$600',
    
  },
  {
    name: 'Titan 7 TS5 Forged Wheels',
    description:
      'Lightweight and durable forged wheels for improved performance and style.',
    imgSrc: '/images/wheels.png',
    price: '$2400',
  },
  {
    name: 'Streethunter Carbon Fiber Spoiler',
    description:
      'Adds aggressive styling and aerodynamic downforce for improved stability at high speeds.',
    imgSrc: '/images/spoiler.png',
    price: '$1400',
  },
];

const Specs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === specs.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? specs.length - 1 : prevIndex - 1
      );
    };
  
    return (
        <section id="specs"
  className="relative h-screen text-black overflow-hidden border-t-4"
  style={{
    backgroundImage: `url('/images/sky.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-3xl z-10 hover:text-red-500 transition duration-300"
        >
          &#8249;
        </button>
  
        <button
          onClick={goToNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-3xl z-10 hover:text-red-500 transition duration-300"
        >
          &#8250;
        </button>
  
        {/* Main Part Display */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Image */}
          <img
            src={specs[currentIndex].imgSrc}
            alt={specs[currentIndex].name}
            className="w-1/3 h-auto object-contain drop-shadow-lg"
          />
  
          {/* Part Title and Description */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-header">{specs[currentIndex].name}</h1>
            <p className="text-lg md:text-xl font-body mt-4">{specs[currentIndex].description}</p>
            <p className="text-2xl font-body text-gray-900 mt-2">{specs[currentIndex].price}</p>
          </div>
  
          {/* Dots Navigation */}
          <div className="flex space-x-2">
            {specs.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Specs;