"use client";

import React from "react";
import "@/app/mystery-button.css";

function PuzzleLink({ number }: { number: number }) {
  const rooms = [
    "basement",
    "living room",
    "gallery",
    "bedroom",
    "hallway",
    "study",
  ];

  return (
    <a
      className={
        " flex flex-col items-center justify-center text-white underline border-white border focus:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold text-lg"
      }
      href={`/puzzle/${number + 1}`}
    >
      {rooms[number]}
    </a>
  );

  /*return (
      <div className={"flex flex-col items-center justify-center relative"}>
        {/!*<button
          aria-label={`To Puzzle ${number + 1}`}
          role={"link"}
          className="mystery-button text-md"
          onClick={() => router.push(`/puzzle/${number + 1}`)}
        >
          {number + 1}
        </button>*!/}
        <h2
          className={
            "w-full text-center text-white font-bold capitalize text-center"
          }
        >
          <a
            className={
              "text-white underline px-4 py-4 border-white border focus:border-dashed hover:border-dashed w-full block"
            }
            href={`/puzzle/${number + 1}`}
          >
            {rooms[number]}
          </a>
        </h2>
      </div>
    );*/
}

export default PuzzleLink;
