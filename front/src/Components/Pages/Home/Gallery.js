import React, { useState } from 'react';

const images = [
  'Car1.jpg',
  'Car2.jpg',
  'Car3.jpg',
  'Car4.jpg',
  'Car5.jpg',
  'Car6.jpg',
  'Car10.jpg',
  'Car8.jpg',
  'Car9.jpg'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-gray-100 font-header border-t-4"  >
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={`/images/${image}`}
              alt={`Car ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={`/images/${selectedImage}`}
              alt="Selected Car"
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  </section>
  );
};

export default Gallery;
