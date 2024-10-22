"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import Logo from "../../public/logo.jpeg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-4 py-6 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center transition duration-300">
        <Image
          src={Logo}
          alt={"logo"}
          className="w-[125px] sm:w-[200px]"
          priority
        />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className="hidden relative md:flex space-x-6 text-black">
          <li>
            <Link
              href="/"
              className={`${
                currentPath === "/" ? "text-blue-700" : ""
              } hover:text-blue-700 font-medium transition duration-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={`${
                currentPath.includes("/about-us") ? "text-blue-700" : ""
              } hover:text-blue-700 font-medium transition duration-300`}
            >
              About Us
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`${
                currentPath.includes("/what-we-do") ? "text-blue-700" : ""
              } hover:text-blue-700 font-medium flex items-center transition duration-300`}
            >
              What We Do
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute z-10 left-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 opacity-100">
                <li className="hover:bg-gray-200 transition duration-300">
                  <Link href="/what-we-do/process" className="block px-4 py-2">
                    Process
                  </Link>
                </li>
                <li className="hover:bg-gray-200 transition duration-300">
                  <Link
                    href="/what-we-do/warehouse"
                    className="block px-4 py-2"
                  >
                    Warehouse
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/gallery"
              className={`${
                currentPath.includes("/gallery") ? "text-blue-700" : ""
              } hover:text-blue-700 font-medium transition duration-300`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={`${
                currentPath.includes("/contact-us") ? "text-blue-700" : ""
              } hover:text-blue-700 font-medium transition duration-300`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {isMenuOpen && (
          <ul className="md:hidden top-16 left-0 w-full bg-white text-black flex flex-col space-y-4 p-4 transition-transform duration-300 ease-in-out transform">
            <li>
              <Link
                href="/"
                className={`${
                  currentPath === "/" ? "text-blue-700" : ""
                } hover:text-blue-700 font-medium transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  currentPath.includes("/about-us") ? "text-blue-700" : ""
                } hover:text-blue-700 font-medium transition duration-300`}
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className={`${
                  currentPath.includes("/what-we-do") ? "text-blue-700" : ""
                } hover:text-blue-700 font-medium flex items-center transition duration-300`}
              >
                What We Do
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="bg-gray-700 text-gray-200 rounded mt-2 space-y-2 p-2 transition-opacity duration-300 opacity-100">
                  <li className="hover:bg-gray-600 transition duration-300">
                    <Link
                      href="/what-we-do/process"
                      className="block px-4 py-2"
                    >
                      Process
                    </Link>
                  </li>
                  <li className="hover:bg-gray-600 transition duration-300">
                    <Link
                      href="/what-we-do/warehouse"
                      className="block px-4 py-2"
                    >
                      Warehouse
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/gallery"
                className={`${
                  currentPath.includes("/gallery") ? "text-blue-700" : ""
                } hover:text-blue-700 font-medium transition duration-300`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${
                  currentPath.includes("/contact-us") ? "text-blue-700" : ""
                } hover:text-blue-700 font-medium transition duration-300`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
