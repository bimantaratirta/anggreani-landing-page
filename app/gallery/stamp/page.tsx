"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAuth } from "@/context/AuthContext";
import crypto from "crypto";

interface Image {
  id: number;
  title: string;
  src: string;
}

const Stamp: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const auth = useAuth();
  const [form, setForm] = useState<{ pw: string; error?: string }>({ pw: "" });
  const access =
    "615a76a1c81adc95c890a5b70f548a0a5a39be11c82641270c5c529b9f076521";

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/images");
      const data: Image[] = await res.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  function handleSubmit() {
    if (form.pw === access) {
      auth.login();
    } else {
      setForm((old) => ({ ...old, error: "Wrong Password!" }));
    }
  }

  function handleOnChange(pw: string) {
    setForm({
      pw: crypto.createHash("sha256").update(pw).digest("hex"),
    });
  }

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

  if (!auth.isLogin) {
    return (
      <div className="flex items-center justify-center min-h-screen relative">
        <div className="max-w-sm w-full mx-auto absolute p-8 bg-gray-100 rounded-md">
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              You need to insert password to see our contents!
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => handleOnChange(e.target.value)}
              required
            />
            <label htmlFor="" className="text-red-500 text-sm">
              {form.error}
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden grou flex flex-col items-center"
          >
            <Image
              src={item.src}
              alt={item.title}
              className="object-cover w-auto h-80 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
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
            <div className="absolute relative max-h-[90%] flex justify-center">
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
              <div className="relative overflow-hidden grou flex flex-col items-center">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="object-cover w-auto h-80 md:h-[500px]"
                  width={400}
                  height={400}
                />
                <p className="text-center text-sm mt-2 text-white">
                  {images[selectedImage].title}
                </p>
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
                <div
                  key={index}
                  className="relative overflow-hidden grou flex flex-col items-center"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    className={`w-12 h-12 object-cover rounded-lg cursor-pointer ${
                      index === selectedImage ? "border-2 border-white" : ""
                    }`}
                    width={400}
                    height={400}
                    onClick={() => setSelectedImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stamp;
