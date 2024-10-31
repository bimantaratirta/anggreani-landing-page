"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import ProductionCapacity from "@/public/image/Production Capacity 3.jpg";
import DesignExpertise from "@/public/image/IMG_0295.jpg";
import TheHistory from "@/public/image/The History 1.jpg";

const content = [
  {
    title: 'The History of "Anggreani Batik" Batik Factory',
    description:
      "CV. ANGGREANI is an exporter of Indonesian batik fabric handmade, established in 2015 by Ms. Umi Isticharoh, with the experience of working in a batik company, she tries to innovate making her own batik in small quantities. At that time he tried to give some samples of batik made to the relations to be reviewed and assisted to promote in the domestic and international markets. Because at that time the fashion trends of batik in the international market looked very interested, especially Indonesian Batik with a variety of uniqueness. Many original Batik motifs are produced here, although there are so many design requests from customers that are done here. By always innovating on the designs, materials and types of batik that change trends every time, then this company can grow and become more widespread in the international market .",
    content: (
      <div className="h-full w-full rounded flex items-center justify-center text-black">
        <Image
          src={TheHistory}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Production Capacity",
    description:
      "We have our own factory for production which can produce more than 100,000 yards every month consisting of various colors and very beautiful patterns that are handmade.",
    content: (
      <div className="h-full w-full rounded flex items-center justify-center text-black">
        <Image
          src={ProductionCapacity}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Design Expertise",
    description:
      "We also have designer and many artisans who are very reliable in batik technique so we can always fulfill whatever you need, from the design to colorations.",
    content: (
      <div className="h-full w-full rounded flex items-center justify-center text-black">
        <Image
          src={DesignExpertise}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function HomeHistory() {
  return (
    <div className="w-full no-scrollbar px-8 my-10">
      <StickyScroll content={content} />
    </div>
  );
}
