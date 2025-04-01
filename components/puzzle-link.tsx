import React from "react";

function PuzzleLink({ number }: { number: number }) {
  return (
    <div className="w-1/2 h-1/5 md:w-1/5 md:h-1/2 bg-black dark:bg-white border-2 border-black">
      <div
        className={
          "h-full w-full flex items-center justify-center text-6xl font-bold"
        }
      >
        {number}
      </div>
    </div>
  );
}

export default PuzzleLink;
