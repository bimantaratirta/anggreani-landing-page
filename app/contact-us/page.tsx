"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function ContactUs() {
  const [data, setData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    msg: string;
  }>({ firstName: "", lastName: "", email: "", phone: "", msg: "" });

  return (
    <div className="flex flex-col gap-16 w-full mt-4 p-8">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-md text-center mb-2">
          Contact our team
        </div>
        <div className="text-sm text-center">
          Got any questions about the product or scaling on our
          platform?We&apos;re here to help.
        </div>
        <div className="text-sm text-center">
          Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row gap-16 justify-center">
        <div className="flex">
          <div className="max-w-md mx-auto space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-bold">Chat with us</h2>
              <p className="text-gray-500">
                Speak to our friendly team via live chat.
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://wa.me/+6282135929471"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-blue-800"
                  >
                    <FaWhatsapp />
                    <span>Start a live chat on Whatsapp</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/anggreanibatik"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-blue-800"
                  >
                    <FaInstagram />
                    <span>Visit our Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:anggreanibatik@gmail.com"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-blue-800"
                  >
                    <FiMail />
                    <span>anggreanibatik@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:doc1.anggreanibatik@gmail.com"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-blue-800"
                  >
                    <FiMail />
                    <span>doc1.anggreanibatik@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:marketing1.anggreanibatik@gmail.com"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-blue-800"
                  >
                    <FiMail />
                    <span>marketing1.anggreanibatik@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold">Call us</h2>
              <p className="text-gray-500">
                Call our team Mon-Fri from 8am to 5pm (GMT+7).
              </p>
              <Link
                href="tel:+622717452396"
                target="_blank"
                className="flex items-center space-x-2 hover:text-blue-800"
              >
                <BsTelephone />
                <span>(+62) 271 745 2396</span>
              </Link>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold">Visit us</h2>
              <p className="text-gray-500">
                Chat to us in person at our office.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.1955293634324!2d110.78075818061954!3d-7.560968958413843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1448f533b88b%3A0xabbe7cbb3f4e04a4!2sCV.%20Anggreani%20Batik!5e0!3m2!1sid!2sid!4v1728228307991!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First name"
                  className="px-4 py-2 mt-1 block w-full rounded-md border-1 border-gray-400 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm"
                  onChange={(e) =>
                    setData((old) => ({ ...old, firstName: e.target.value }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last name"
                  className="px-4 py-2 mt-1 block w-full rounded-md border-1 border-gray-400 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm"
                  onChange={(e) =>
                    setData((old) => ({ ...old, lastName: e.target.value }))
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="px-4 py-2 mt-1 block w-full rounded-md border-1 border-gray-400 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm"
                onChange={(e) =>
                  setData((old) => ({ ...old, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <div className="flex mt-1">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="+1 (555) 000-0000"
                  className="px-4 py-2 block w-3/4 rounded-r-md border-1 border-gray-400 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm"
                  onChange={(e) =>
                    setData((old) => ({ ...old, phone: e.target.value }))
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave us a message..."
                className="px-4 py-2 mt-1 block w-full rounded-md border-1 border-gray-400 shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm"
                onChange={(e) =>
                  setData((old) => ({ ...old, msg: e.target.value }))
                }
              ></textarea>
            </div>

            <div>
              <Link
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                onClick={() => {}}
                href={`mailto:anggreanibatik@gmail.com?subject=Customer%20-%20${encodeURIComponent(
                  data.firstName + " " + data.lastName
                )}%20-%20${encodeURIComponent(
                  data.phone
                )}%20-%20${encodeURIComponent(
                  data.email
                )}&body=Hello!%0D%0A%0D%0AMy%20name%20is%20${encodeURIComponent(
                  data.firstName + " " + data.lastName
                )}%2C%20I%20want%20to%20know%20more%20about%20Anggreani%20Batik.%0D%0A${encodeURIComponent(
                  data.msg
                )}%0D%0A%0D%0AThank%20You%2C%0D%0A${encodeURIComponent(
                  data.firstName + " " + data.lastName
                )}`}
              >
                Send
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
