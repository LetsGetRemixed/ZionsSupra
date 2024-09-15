import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 border-t-4 border-white font-body">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo, Navigation Links, and Instagram */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/images/tire.png"
              alt="Tire Logo"
              className="w-12 h-12 object-contain mr-3"
            />
            <h3 className="text-2xl font-logo">Zions Supra</h3>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex space-x-6 text-lg">
              <li><a href="#specs" className="hover:text-gray-400">Specs</a></li>
              <li><a href="#gallery" className="hover:text-gray-400">Gallery</a></li>
              <li><a href="#social" className="hover:text-gray-400">Social</a></li>
            </ul>
          </div>

          {/* Follow Us on Instagram */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/zions.supra/" /* Replace with actual Instagram link */
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                src="/images/icons8-instagram.svg"
                alt="Instagram"
                className="w-8 h-8 inline-block"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright and Developer Credit */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zions Supra. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website created by{' '}
            <a
              href="https://cjpweb.com" /* Replace with actual website link */
              className="text-red-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CJP Web Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
