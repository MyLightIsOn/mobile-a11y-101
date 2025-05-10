"use client";

import React, { useEffect, useState } from "react";
import PuzzleLink from "@/components/puzzle-link";

function checkPuzzles(data: { hasOwnProperty: (arg0: string) => any }) {
  for (let i = 1; i <= 5; i++) {
    if (!data.hasOwnProperty("puzzle_" + i + "_complete")) {
      return false;
    }
  }
  return true;
}

function Page() {
  const [allPuzzleSolved, setAllPuzzleSolved] = useState(false);

  useEffect(() => {
    const game_data = JSON.stringify(localStorage);
    setAllPuzzleSolved(checkPuzzles(JSON.parse(game_data)));
  }, []);

  return (
    <div className={"h-full"}>
      <div
        className="h-[80%] w-screen grid grid-cols-2 grid-rows-3 gap-1 card-container"
        style={{
          backgroundImage: "url('/entryway.webp')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <PuzzleLink
            key={`puzzle-${index}`}
            number={index}
            allPuzzleSolved={allPuzzleSolved}
          />
        ))}
      </div>
      <div className={"h-auto flex-col flex pt-4"}>
        <a
          className={
            "text-white focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative spooky-font"
          }
          href={`/feedback`}
        >
          Feedback
        </a>
        <a
          className={
            "text-white focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative spooky-font"
          }
          href={`/`}
        >
          Home
        </a>
      </div>
    </div>
  );
}

export default Page;
