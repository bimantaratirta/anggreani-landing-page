"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    isLogin,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    isLogin: boolean;
  }) => (
    <Link
      href={isLogin ? `/gallery/${card.title.toLowerCase()}` : "#"}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "lg:rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[90vh] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        isLogin ? "cursor-pointer" : "cursor-default"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  className,
  isLogin,
}: {
  cards: Card[];
  className: string;
  isLogin?: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-5 mx-auto lg:px-5 w-full",
        className
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          isLogin={isLogin ?? false}
        />
      ))}
    </div>
  );
}
