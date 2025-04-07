import React from "react";
import PuzzleLink from "@/components/puzzle-link";

function Page() {
  return (
    <div className="h-[90vh] w-screen grid grid-cols-2 grid-rows-3 gap-1 card-container">
      {/*Uncomment overlay to raise difficult*/}
      {/*<div className={"absolute top-0 left-0 w-screen h-screen z-10"} />*/}
      {Array.from({ length: 6 }).map((_, index) => (
        <PuzzleLink key={`puzzle-${index}`} number={index} />
      ))}
    </div>
  );
}

export default Page;
