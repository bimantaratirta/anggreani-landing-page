"use client";

import React, { useState } from "react";
import Dummy from "@/public/carousel1.jpg";
import Dummy2 from "@/public/carousel2.jpeg";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  { id: 1, title: "Foto 1", src: Dummy },
  { id: 2, title: "Foto 2", src: Dummy2 },
  { id: 3, title: "Foto 3", src: Dummy },
  { id: 4, title: "Foto 4", src: Dummy2 },
  { id: 1, title: "Foto 1", src: Dummy },
  { id: 2, title: "Foto 2", src: Dummy2 },
  { id: 3, title: "Foto 3", src: Dummy },
  { id: 4, title: "Foto 4", src: Dummy2 },
  { id: 1, title: "Foto 1", src: Dummy },
  { id: 2, title: "Foto 2", src: Dummy2 },
  { id: 3, title: "Foto 3", src: Dummy },
  { id: 4, title: "Foto 4", src: Dummy2 },
  { id: 1, title: "Foto 1", src: Dummy },
  { id: 2, title: "Foto 2", src: Dummy2 },
  { id: 3, title: "Foto 3", src: Dummy },
  { id: 4, title: "Foto 4", src: Dummy2 },
  { id: 5, title: "Foto 5", src: Dummy },
];

const Spray: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden group">
            <Image
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              width={400}
              height={400}
              onClick={() => handleImageClick(index)}
            />
            <p className="text-center text-sm mt-2 text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50  max-h-screen">
          <div className="relative w-[90%] h-[75%]">
            <div className="absolute relative max-h-[90%] bg-red-500 flex justify-center">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                ✕
              </button>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white opacity-40 rounded-full p-1 md:p-3 flex-1 shadow-md"
              >
                <IoIosArrowBack className="text-[16px] md:text-[32px]" />
              </button>
              <div className="w-100 h-100">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="h-[100%] object-cover"
                />
              </div>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white opacity-40 rounded-full p-1 md:p-3 flex-1 shadow-md"
              >
                <IoIosArrowForward className="text-[16px] md:text-[32px]" />
              </button>
            </div>
            <div className="absolute mt-4 flex flex-wrap justify-center space-x-2 space-y-2">
              {images.map((image, index) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.title}
                  className={`w-12 h-12 object-cover rounded-lg cursor-pointer ${
                    index === selectedImage ? "border-2 border-white" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spray;
