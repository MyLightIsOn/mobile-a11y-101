import React from "react";
import PuzzleLink from "@/components/puzzle-link";

function Page() {
  return (
    <div className="flex flex-wrap h-screen md:h-auto md:flex-row text-black">
      <div className={"absolute top-0 left-0 w-full h-full"} />
      <PuzzleLink number={1} />
      <PuzzleLink number={2} />
      <PuzzleLink number={3} />
      <PuzzleLink number={4} />
      <PuzzleLink number={5} />
      <PuzzleLink number={6} />
      <PuzzleLink number={7} />
      <PuzzleLink number={8} />
      <PuzzleLink number={9} />
      <PuzzleLink number={10} />
    </div>
  );
}

export default Page;
