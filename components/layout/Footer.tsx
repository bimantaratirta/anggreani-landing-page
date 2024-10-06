import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className="flex w-full justify-center text-center py-16 px-8">
      Copyright © {date.getFullYear()} Anggreani Batik
    </div>
  );
}
