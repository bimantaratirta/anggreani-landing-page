import React from "react";

import Image from "next/image";

export default function HomeAdvantages() {
  return (
    <div className="flex flex-col w-full items-center p-16 gap-16 m-auto my-16">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 md:gap-8 ${
            index % 2 == 0
              ? "flex-col md:flex-row"
              : "flex-col md:flex-row-reverse"
          }`}
        >
          <Image
            src="/image/Header Slide 1.jpg"
            alt={"image"}
            width={275}
            height={0}
            className="flex-1 max-w-[300px] rounded-md"
          />
          <div
            className={`flex flex-col gap-2 md:gap-4 max-w-md md:max-w-[600px] items-center ${
              index % 2 == 0 ? "md:items-start" : "md:items-end"
            }`}
          >
            <div className="text-2xl font-bold">Our Adventage {index + 1}</div>
            <div
              className={`text-center ${
                index % 2 == 0 ? "md:text-left" : "md:text-right"
              }`}
            >
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
