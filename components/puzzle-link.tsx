"use client";

import React, { useEffect, useState } from "react";
import "@/app/mystery-button.css";

const rooms = [
  "basement",
  "living room",
  "gallery",
  "dining room",
  "hallway",
  "library",
];

function PuzzleLink({ number }: { number: number }) {
  const puzzleKey = `puzzle_${number + 1}_complete`;
  const [puzzleComplete, setPuzzleComplete] = useState(false);

  useEffect(() => {
    if (localStorage?.getItem(puzzleKey)) {
      setPuzzleComplete(true);
    }
  }, []);

  return (
    <a
      className={
        "spooky-font flex flex-col items-center justify-center text-white border-white border focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative"
      }
      href={`/puzzle/${number + 1}`}
    >
      {puzzleComplete && (
        <div
          className={"absolute w-full h-full flex justify-center items-center"}
        >
          <img
            className={"w-3/4 max-w-32 relative z-10"}
            src={"/trophy.webp"}
            alt={`You have completed puzzle ${number + 1}`}
          />
          <div className={"absolute w-full h-full bg-white opacity-40"} />
        </div>
      )}
      {rooms[number]}
    </a>
  );
}

export default PuzzleLink;
