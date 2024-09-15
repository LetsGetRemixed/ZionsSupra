import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <header className="relative w-full font-header overflow-hidden"style={{ height: '75vh' }}>
      {/* Parallax Image with Tint */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/Car7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...parallaxStyle,
        }}
      >
        {/* Tint Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Header Title */}
      <div className="absolute bottom-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-header lg:text-8xl  font-bold bg-opacity-50 px-8 py-4 rounded-lg shadow-lg tracking-wide leading-tight text-center">
          Speed, Power, and Control
        </h1>
      </div>
    </header>
  );
};

export default Header;


