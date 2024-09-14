import React from 'react';
import Slider from 'react-slick';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <header className="relative w-full h-screen">
      {/* Slick Carousel for Images */}
      <Slider {...settings} className="h-full">
        <div>
          <img
            src="/images/Car1.jpg"
            alt="Zion's Car 1"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src="/images/Car2.jpg"
            alt="Zion's Car 2"
            className="w-full h-screen object-cover"
          />
        </div>
        <div>
          <img
            src="/images/Car3.jpg"
            alt="Zion's Car 3"
            className="w-full h-screen object-cover"
          />
        </div>
      </Slider>

      {/* Header Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-header lg:text-8xl bg-black font-bold bg-opacity-50 px-8 py-4 rounded-lg shadow-lg tracking-wide leading-tight text-center">
          Speed, Power, and Control
        </h1>
      </div>
    </header>
  );
};

export default Header;

