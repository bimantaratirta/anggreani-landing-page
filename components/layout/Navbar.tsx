import React from "react";

import Image from "next/image";

import Logo from "../../public/logo.jpeg";

export default function Navbar() {
  return (
    <div className="flex w-full px-4 py-6 justify-start sm:justify-center">
      <Image
        src={Logo}
        alt={"Anggreani-Loog"}
        className="w-[125px] sm:w-[200px]"
      ></Image>
    </div>
  );
}
