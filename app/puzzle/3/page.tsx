"use client";

import React, { useEffect, useState } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleComplete from "@/components/puzzle-complete";
import puzzleComplete from "@/lib/puzzleComplete";

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
      Alternative text is the description of an image that is read to a screen
      reader. When we use images, it is essential to give them good alternative
      text.
    </p>
  ),
};

const Puzzle3 = () => {
  const [fixedPainting, setFixedPainting] = useState<any[]>([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    const newStartTime = new Date();
    setStartTime(newStartTime);

    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (fixedPainting.length === 4) {
      setPuzzleSolved(true);
      puzzleComplete("puzzle_3", startTime, elapsedTime.toString());
    }
  }, [fixedPainting]);

  return (
    <div className="bg-black text-white min-h-screen w-screen text-center p-4 pb-30">
      <h1 className="text-2xl font-bold pb-2">Puzzle 3:</h1>
      <h2 className="text-xl pb-4">The Forgotten Gallery</h2>

      <p className={"sr-only -top-96 -left-96 overflow-hidden"}>
        You step into a cold, breezy room with no windows. The walls are lined
        with dusty portraits. Their eyes seem to follow you. The frames are
        aged, the faces silent, but one looks like they have a secret.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <div
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "dad",
            ]);
          }}
        >
          <img
            src="/husband.webp"
            alt="A faded portrait of a stern-looking husband. On the back of the painting it says: 'Taxes were the real horror.'"
            className={`w-full h-auto relative portrait ${fixedPainting.includes("dad") ? "-rotate-0 left-0" : "rotate-6 left-2"}`}
          />
        </div>
        <div
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "mom",
            ]);
          }}
        >
          <img
            src="/wife.webp"
            alt="An elegant woman in a dark gown. On the back: 'Don't forget to water the plants.'"
            className={`w-full h-auto relative portrait ${fixedPainting.includes("mom") ? "-rotate-0 left-0" : "-rotate-6 -left-4"}`}
          />
        </div>

        <div
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "kid",
            ]);
          }}
        >
          <img
            src="/daughter.webp"
            alt="A young girl with a mischievous smile. On the back: 'Our portraits are a mess. Double tap on each one to fix them."
            className={`w-full h-auto relative portrait ${fixedPainting.includes("kid") ? "-rotate-0 left-0" : "-rotate-4 left-3"}`}
          />
        </div>

        <div
          onClick={() => {
            setFixedPainting((prevFixedPainting) => [
              ...prevFixedPainting,
              "dog",
            ]);
          }}
        >
          <img
            src="/dog.webp"
            alt="A shaggy, but happy dog. On the back: 'Woof! Woof!'"
            className={`w-full h-auto relative portrait ${fixedPainting.includes("dog") ? "-rotate-0 left-0" : "rotate-3 -left-2"}`}
          />
        </div>
      </div>
      <PuzzleComplete
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
      />
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Puzzle3;
