import React from 'react';

const Social = () => {
  return (
    <section
      className="py-16 px-8 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 border-t-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Invite to Join Instagram */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-white font-header">
            Check Out Our Instagram!
          </h1>
          <p className="text-lg text-gray-200 mt-4 font-body">
            Stay updated with the latest posts. Follow us on Instagram for more!
          </p>
          <a
  href="https://www.instagram.com/zions.supra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block border-2 border-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-8 py-3 rounded-full text-lg font-header hover:bg-gradient-to-l hover:from-pink-500 hover:via-yellow-500 hover:to-purple-500 transition duration-300 shadow-lg hover:shadow-xl"
>
            Follow Us on Instagram
          </a>
        </div>

        {/* Right Side: Instagram Account Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/instagram.png" // Replace with the actual path to your Instagram image
            alt="Instagram Account"
            className="w-72 h-auto object-cover rounded-lg shadow-lg border-2 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
