import React from "react";

function PuzzleLink({ number }: { number: number }) {
  return (
    <div className="w-1/2 h-1/5 md:w-1/5 md:h-1/2 bg-black dark:bg-white border-2 border-black justify-center items-center text-center">
      <a
        href={`puzzle/${number}`}
        className={
          "h-full w-full block flex items-center justify-center text-6xl font-bold dark:bg-white dark:hover:bg-black dark:hover:text-white hover:underline"
        }
      >
        {number}
      </a>
    </div>
  );
}

export default PuzzleLink;
