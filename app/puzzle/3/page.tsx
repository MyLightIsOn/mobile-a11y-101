"use client";

import React, { useEffect, useState } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleComplete from "@/components/puzzle-complete";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        The portraits are silent to the eye, but one left behind a message.
        Check what’s written on the back.
      </p>
    </div>
  ),
};

const puzzleSolvedContent = {
  puzzleNumber: 3,
  description: (
    <p className={"text-left"}>
      Alternative text is what is the description of an image that is read to a
      screen reader. When we use images, it is essential to give them good
      alternative text.
    </p>
  ),
};

const Puzzle3 = () => {
  const [fixedPainting, setFixedPainting] = useState<any[]>([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-screen text-center p-4 pb-30">
      <h1 className="text-2xl font-bold pb-2">
        Puzzle 3: The Forgotten Gallery
      </h1>
      <h2 className="text-xl pb-4">
        The portraits are quiet. But one voice lingers...
      </h2>

      <p className={"sr-only"}>
        You step into a cold, breezy with no windows. The walls are lined with
        dusty portraits. Their eyes seem to follow you. The frames are aged, the
        faces silent, but one looks like they have a secret.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <img
          src="/husband.webp"
          alt="A faded portrait of a stern-looking husband. On the back of the painting it says: 'Taxes were the real horror.'"
          className={`w-full h-auto ${fixedPainting.includes("dad") ? "" : "rotate-8 relative left-2"}`}
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "dad",
            ]);
          }}
        />
        <img
          src="/wife.webp"
          alt="An elegant woman in a dark gown. On the back: 'Don't forget to water the plants.'"
          className={`w-full h-auto ${fixedPainting.includes("mom") ? "" : "-rotate-4 relative right-4"}`}
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "mom",
            ]);
          }}
        />

        <PuzzleComplete
          dialogContent={puzzleSolvedContent}
          puzzleSolved={puzzleSolved}
          delay={fixedPainting.length !== 3}
          buttonText={
            "A young girl with a mischievous smile. On the back: 'Our portraits are a mess. Double tap on each of to fix them. Then fix mine last."
          }
        >
          <img
            src="/daughter.webp"
            alt="A young girl with a mischievous smile. On the back: 'Our portraits are a mess. Double tap on each of to fix them. Then fix mine last."
            className={`w-full h-auto ${fixedPainting.includes("kid") ? "" : "-rotate-4"}`}
            onClick={() => {
              if (fixedPainting.length === 3) {
                setFixedPainting((prevFixedPainting) => [
                  ...prevFixedPainting,
                  "kid",
                ]);
                setPuzzleSolved(true);
                localStorage.setItem("puzzle_3_time", elapsedTime.toString());
                localStorage.setItem("puzzle_3_complete", "true");
              }
            }}
          />
        </PuzzleComplete>

        <img
          src="/dog.webp"
          alt="A shaggy, but happy dog. On the back: 'Woof! Woof!'"
          className={`w-full h-auto ${fixedPainting.includes("dog") ? "" : "rotate-6 relative -left-2"}`}
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "dog",
            ]);
          }}
        />
      </div>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Puzzle3;
