"use client";

import React from "react";

export default function HomeTestimonials() {
  return (
    <div className="flex flex-col antialiased bg-blue-900 items-center justify-center relative overflow-hidden gap-4 py-16 w-screen">
      <div className="flex flex-col md:flex-row w-full mb-4 gap-4 justify-center gap-8 md:gap-16">
        {projects.map((project, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <div className="font-black text-white text-2xl md:text-4xl">
              {project.count}+
            </div>
            <div className="md:text-2xl text-white">{project.description}</div>
          </div>
        ))}
      </div>
      {/* <InfiniteMovingCards items={testimonials} direction="left" speed="slow" /> */}
    </div>
  );
}

const projects = [
  { count: "100,000", description: "Yards/Month" },
  { count: "5", description: "Countries" },
];

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
