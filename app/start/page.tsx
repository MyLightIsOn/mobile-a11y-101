import React from "react";
import PuzzleLink from "@/components/puzzle-link";

function Page() {
  return (
    <div
      className="h-screen w-screen grid grid-cols-2 grid-rows-4 gap-1 card-container"
      style={{
        backgroundImage: "url('/entryway.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className={"sr-only"}>
        Instructions: Each room in this house contains a puzzle. When you enter,
        listen to the instructions, it may contain clues! Make sure to write
        down each clue as you will need it to solve the final puzzle. Choose a
        door to begin your search.
      </p>
      {Array.from({ length: 6 }).map((_, index) => (
        <PuzzleLink key={`puzzle-${index}`} number={index} />
      ))}
      <a
        className={
          "flex flex-col items-center justify-center text-white border-white border focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative spooky-font"
        }
        href={`/feedback`}
      >
        Feedback
      </a>
      <a
        className={
          "flex flex-col items-center justify-center text-white border-white border focus:bg-white/50 hover:bg-white/50 hover:border-dashed w-full focus:text-black hover:text-black capitalize bold relative spooky-font"
        }
        href={`/`}
      >
        Home
      </a>
    </div>
  );
}

export default Page;
