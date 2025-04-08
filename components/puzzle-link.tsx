"use client";

import React from "react";
import "@/app/mystery-button.css";

function PuzzleLink({ number }: { number: number }) {
  const rooms = [
    "basement",
    "living room",
    "gallery",
    "dining room",
    "hallway",
    "library",
  ];

  return (
    <a
      className={
        " flex flex-col items-center justify-center text-white underline border-white border focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold text-lg"
      }
      href={`/puzzle/${number + 1}`}
    >
      {rooms[number]}
    </a>
  );
}

export default PuzzleLink;
