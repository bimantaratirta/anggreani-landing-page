import React from "react";

import Image from "next/image";
import Carousel from "../../public/carousel1.jpg";

const contents = [
  {
    image: "",
    title: "",
    description: "",
  },
];

export default function HomeAdvantages() {
  return (
    <div className="flex flex-col w-full items-center p-8 gap-16 m-auto my-16">
      {[1, 2, 3].map((card, index) => (
        <div
          className={`flex gap-16 ${
            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Image
            src={Carousel}
            alt={"image"}
            className="flex-1 max-w-[300px] rounded-md"
          />
          <div
            className={`flex flex-col gap-8 max-w-[600px] ${
              index % 2 == 0 ? "items-start" : "items-end"
            }`}
          >
            <div className="text-2xl font-bold">This is Title</div>
            <div className={`${index % 2 == 0 ? "text-left" : "text-right"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              aliquam corporis officia recusandae repudiandae cum facilis et
              deserunt aspernatur accusantium! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Veniam, ut. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur, expedita?
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
