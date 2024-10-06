"use client";

import HomeAbout from "@/components/home/HomeAbout";
import HomeSlider from "@/components/home/HomeSlider";
import HomeHistory from "@/components/home/HomeHistory";
import HomeAdvantages from "@/components/home/HomeAdvantages";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeVisionMision from "@/components/home/HomeVisionMision";
import ScrollUpButton from "@/components/home/HomeScrollUpButton";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-items-center min-h-screen">
      <HomeSlider />
      <br />
      <HomeHistory />
      <br />
      <HomeVisionMision />
      <br />
      <HomeAdvantages />
      <br />
      <HomeTestimonials />
      <br />
      <HomeAbout />
      <ScrollUpButton />
    </div>
  );
}
