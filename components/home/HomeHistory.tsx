"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Logo from "../../public/logo.jpeg";
import Carousel from "../../public/carousel1.jpg";

const content = [
  {
    title: 'The History of "Anggreani Batik" Batik Factory',
    description:
      "The Anggreani Batik factory was founded in 1975 by H. Sumarno, a local entrepreneur with a deep passion for traditional batik art. Starting as a small business in his backyard, H. Sumarno began his batik production with just two artisans. With perseverance, love for art, and the rich cultural heritage of Java, the factory grew to become one of the leading batik producers in Surakarta, Central Java.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src={Logo}
          width={300}
          height={300}
          className="h-full w-full object-contain rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Business Journey",
    description:
      "In its early years, Anggreani Batik focused on the production of traditional hand-drawn batik, using natural dyes and iconic Javanese motifs such as Parang, Kawung, and Truntum. The uniqueness and high quality of the products quickly made the factory well-known in both local and national markets.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black">
        <Image
          src={Carousel}
          width={300}
          height={300}
          className="h-full w-full object-contain rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "By 1985, as demand for batik surged, the factory underwent a significant expansion. The production facilities were upgraded, and the number of artisans working under Anggreani Batik grew to more than 100 people. Over time, Anggreani Batik began to reach international markets, exporting its products to countries such as Japan, the United States, and various European nations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black">
        <Image
          src={Logo}
          width={300}
          height={300}
          className="h-full w-full object-contain rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Location",
    description:
      "The Anggreani Batik factory is located in the heart of Surakarta, also known as Solo, specifically at Jalan Slamet Riyadi No. 123, Surakarta, Central Java. This prime location is in the cultural and artistic hub of Solo, making it an ideal place to express the art of batik and preserve local traditions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black">
        <Image
          src={Carousel}
          width={300}
          height={300}
          className="h-full w-full object-contain rounded"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Commitment to Cultural Heritage",
    description:
      "As one of the oldest batik producers in Surakarta, Anggreani Batik is deeply committed to preserving the art of traditional batik. While the batik industry has modernized, we continue to uphold the hand-drawn and stamped batik techniques passed down through generations. We also embrace modern innovations to create new motifs that keep up with contemporary trends, all while staying true to our cultural roots.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black">
        <Image
          src={Logo}
          width={300}
          height={300}
          className="h-full w-full object-contain rounded"
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
