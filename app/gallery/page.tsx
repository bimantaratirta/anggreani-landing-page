"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import crypto from "crypto";

const cards = [
  {
    title: "Stamp",
    src: "/carousel1.jpg",
  },
  {
    title: "Spray",
    src: "/carousel1.jpg",
  },
];

export default function Gallery() {
  const auth = useAuth();
  const [form, setForm] = useState<{ pw: string; error?: string }>({ pw: "" });
  const access =
    "615a76a1c81adc95c890a5b70f548a0a5a39be11c82641270c5c529b9f076521";

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

  if (!auth.isLogin) {
    return (
      <div className="flex items-center justify-center min-h-screen relative">
        <FocusCards cards={cards} className="blur-md" isLogin={auth.isLogin} />
        <div className="max-w-sm w-full mx-auto absolute p-8 bg-white rounded-md">
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
  } else {
    return <FocusCards cards={cards} className="" isLogin={auth.isLogin} />;
  }
}
