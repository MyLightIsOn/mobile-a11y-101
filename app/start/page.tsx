import React from "react";
import PuzzleLink from "@/components/puzzle-link";

function Page() {
  return (
    <div className="h-screen w-screen grid grid-cols-2 grid-rows-4 gap-1 card-container">
      <div className={"absolute top-0 left-0 w-full h-[80%]"} />

      {Array.from({ length: 8 }).map((_, index) => (
        <PuzzleLink key={`puzzle-${index}`} number={index} />
      ))}
    </div>
  );
}

export default Page;
