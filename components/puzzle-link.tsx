"use client";

import React, { useEffect, useState } from "react";
import { formatTime } from "@/lib/utils";
import "@/app/mystery-button.css";

const rooms = [
  "basement",
  "living room",
  "gallery",
  "dining room",
  "study",
  "library",
];

function PuzzleLink({
  number,
  allPuzzleSolved,
}: {
  number: number;
  allPuzzleSolved: boolean;
}) {
  const puzzleKey = `puzzle_${number + 1}_complete`;
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [bestTime, setBestTime] = useState("0");

  useEffect(() => {
    if (localStorage?.getItem(puzzleKey)) {
      setPuzzleComplete(true);
      const rawBestTime = localStorage.getItem(`puzzle_${number + 1}_time`);
      if (rawBestTime != null) {
        const timeToDisplay = formatTime(parseInt(rawBestTime));
        setBestTime(timeToDisplay);
      }
    }
  }, []);

  const locked = !allPuzzleSolved && number + 1 === 6;

  return (
    <a
      className={
        "flex flex-col items-center justify-center text-white border-white border focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative"
      }
      href={locked ? "#" : `/puzzle/${number + 1}`}
    >
      <div
        className={"absolute w-full h-full flex justify-center items-center"}
      >
        {locked && (
          <img
            className={"w-[70%] max-w-32 relative z-10 -top-3"}
            src={"/lock.webp"}
            alt={`The door is locked. If only you had a key`}
          />
        )}
        {puzzleComplete && (
          <>
            <img
              className={"w-[50%] max-w-32 relative z-10 -top-3"}
              src={"/trophy.webp"}
              alt={`You have completed puzzle ${number + 1}`}
            />
            <div
              className={
                "absolute w-full bottom-0 font-normal z-10 bg-green-800 text-center text-lg"
              }
            >
              <p>Best Time: {bestTime}</p>
            </div>
            <div className={"absolute w-full h-full bg-white opacity-40"} />
          </>
        )}
      </div>
      <span className={"spooky-font "}>{rooms[number]}</span>
    </a>
  );
}

export default PuzzleLink;
