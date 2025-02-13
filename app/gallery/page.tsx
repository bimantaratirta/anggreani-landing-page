"use client";

import { FocusCards } from "@/components/ui/focus-cards";
// import { useAuth } from "@/context/AuthContext";
// import { useState } from "react";
// import crypto from "crypto";

const cards = [
  {
    title: "Stamp",
    src: "/stamp.jpg",
  },
  {
    title: "Spray",
    src: "/spray.jpg",
  },
];

export default function Gallery() {
  // const auth = useAuth();
  // const [form, setForm] = useState<{ pw: string; error?: string }>({ pw: "" });
  // const access =
  //   "615a76a1c81adc95c890a5b70f548a0a5a39be11c82641270c5c529b9f076521";

  // function handleSubmit() {
  //   if (form.pw === access) {
  //     auth.login();
  //   } else {
  //     setForm((old) => ({ ...old, error: "Wrong Password!" }));
  //   }
  // }

  // function handleOnChange(pw: string) {
  //   setForm({
  //     pw: crypto.createHash("sha256").update(pw).digest("hex"),
  //   });
  // }

  return <FocusCards cards={cards} className="" />;
}
