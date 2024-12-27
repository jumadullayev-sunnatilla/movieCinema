import React, { useState } from "react";

const DetailImage = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = data?.backdrops
    ?.slice(0, 8)
    .map((image) => (
      <img
        src={import.meta.env.VITE_IMAGE_URL + image.file_path}
        width={300}
        key={image.file_path}
        alt="Detail"
        className="w-full cursor-pointer"
        onClick={() => openModal(image.file_path)}
      />
    ));

  return (
    <div>
      {/* Rasmlar tarmog'i */}
      <div className="container mx-auto grid grid-cols-4 grid-rows-2 gap-4">
        {images}
      </div>

      {/* Modal oynasi */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()} // Modal ichida bosilganda orqaga qaytmaslik uchun
          >
            <img
              src={import.meta.env.VITE_IMAGE_URL + selectedImage}
              alt="Selected"
              className="max-w-screen-lg max-h-screen"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full"
              onClick={closeModal}
            >
              Orqaga
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailImage;
