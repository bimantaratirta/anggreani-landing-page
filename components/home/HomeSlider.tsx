import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Slider1 from "../../public/image/Header Slide 1.jpg";
import Slider2 from "../../public/image/Header Slide 2.jpg";
import Slider3 from "../../public/image/Header Slide 3.jpg";
import Slider4 from "../../public/image/Header Slide 4.jpg";

export default function HomeSlider() {
  const slides = [
    { url: Slider1, alt: "Batik 1" },
    { url: Slider2, alt: "Batik 2" },
    { url: Slider3, alt: "Batik 3" },
    { url: Slider4, alt: "Batik 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [currentIndex, nextSlide]);

  return (
    <div className="w-full mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.url}
            alt={slide.alt}
            className="w-full aspect-[20/9] object-cover flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white opacity-20 rounded-full p-1 md:p-3 flex-1 shadow-md"
      >
        <IoIosArrowBack className="text-[16px] md:text-[32px]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white opacity-20 rounded-full p-1 md:p-3 flex-1 shadow-md"
      >
        <IoIosArrowForward className="text-[16px] md:text-[32px]" />
      </button>
    </div>
  );
}
