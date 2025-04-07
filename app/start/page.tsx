import React from "react";
import PuzzleLink from "@/components/puzzle-link";

function Page() {
  return (
    <div
      className="h-screen w-screen grid grid-cols-2 grid-rows-3 gap-1 card-container"
      style={{
        backgroundImage: "url('/entryway.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/*Uncomment overlay to raise difficult*/}
      {/*<div className={"absolute top-0 left-0 w-screen h-screen z-10"} />*/}
      <p className={"sr-only"}>
        Instructions: Each room in this house contains a puzzle. When you enter,
        listen to the instructions, it may contain clues! Make sure to write
        down each clue as you will need it to solve the final puzzle. Choose a
        door to begin your search.
      </p>
      {Array.from({ length: 6 }).map((_, index) => (
        <PuzzleLink key={`puzzle-${index}`} number={index} />
      ))}
    </div>
  );
}

export default Page;
