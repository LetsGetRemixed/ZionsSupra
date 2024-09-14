import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-body bg-gradient-to-b from-red-500 via-red-600 to-red-900 border-b-4 border-red-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center">
          <img
            src="/images/tire.png"
            alt="Tire Logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <span className="text-white text-2xl font-header md:text-3xl font-bold ml-3">
            Zions Supra
          </span>
        </div>

        {/* Right Side: Menu Items (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-gray-200 pb-1">
            Specs
          </li>
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-gray-200 pb-1">
            Gallery
          </li>
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer border-b-2 border-transparent hover:border-gray-200 pb-1">
            Social
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggle) */}
      {isOpen && (
        <ul className="md:hidden bg-red-600 text-white text-lg font-medium flex flex-col space-y-2 mt-4 p-4 border-t border-red-800">
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
            Specs
          </li>
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
            Gallery
          </li>
          <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
            Social
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


