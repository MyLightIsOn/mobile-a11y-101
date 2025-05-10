"use client";
import React, { useEffect, useState } from "react";
import "@/app/mystery-button.css";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleComplete from "@/components/puzzle-complete";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        Not all buttons say what they mean. Listen closely. One of them holds
        the truth!
      </p>
    </div>
  ),
};

const puzzleSolvedContent = {
  puzzleNumber: 2,
  description: (
    <p className={"text-left"}>
      Button text is important. Having phrases like click here are ambiguous and
      unhelpful. Good text is a foundation of a good experience. You can turn
      off your screen reader now and press OK.
    </p>
  ),
};

interface Button {
  visible: string;
  aria: string;
  isCorrect: boolean;
}

const Page = () => {
  const [buttons, setButtons] = useState([
    { visible: "", aria: "", isCorrect: false },
  ]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  function shuffle(array: Array<Button>) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateButtons() {
    const texts = [
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
      "Click Here",
    ];

    // Choose a random index that is NOT 0
    const correctIndex = Math.floor(Math.random() * (texts.length - 2)) + 2;

    const buttons = texts.map((text) => ({
      visible: text,
      aria: "Do Not Click Here",
      isCorrect: false,
    }));

    // Set the correct button
    buttons[correctIndex] = {
      visible: texts[correctIndex],
      aria: 'This is the right one! Double tap to continue"',
      isCorrect: true,
    };

    // Shuffle the buttons AFTER assigning the correct one
    return shuffle(buttons);
  }

  useEffect(() => {
    setButtons(generateButtons());
  }, []);

  useEffect(() => {
    if (isLockedOut && timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setIsLockedOut(false);
      setButtons(generateButtons());
    }
  }, [isLockedOut, timer]);

  if (isLockedOut) {
    return (
      <div className="text-white text-center h-screen w-screen absolute top-0 left-0">
        <div className="text-red-800 bg-red-100 h-full w-full flex items-center justify-center flex-col font-bold text-2xl">
          WRONG! <br />
          Try again in:
          <h3 className={"text-9xl font-bold"}>{timer}</h3>
          seconds...
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-black text-white text-center p-4 relative h-screen"
      style={{
        backgroundImage: "url('/living-room.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl font-bold pb-2">Puzzle 2:</h1>
      <h2 className="text-xl pb-20 text-white font-bold">Don't Click Here</h2>

      <p className={"sr-only absolute -top-96 -left-96 overflow-hidden"}>
        You enter the living room. The fireplace has long gone cold, but
        something hums faintly on the coffee table. A set of old buttons sit in
        a neat row—none marked correctly, all tempting. One of them knows the
        way forward.
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {buttons?.length > 2 &&
          buttons.map((btn, idx) => {
            return (
              <button
                key={idx}
                className="mystery-button mb-5 h-[80px]"
                style={{
                  borderRadius: "12px",
                  padding: "4px",
                  fontSize: "14px",
                }}
                aria-label={btn.aria}
                onClick={() => {
                  if (btn.isCorrect) {
                    setPuzzleSolved(true);
                    localStorage.setItem(
                      "puzzle_2_time",
                      elapsedTime.toString(),
                    );
                    localStorage.setItem("puzzle_2_complete", "true");
                  } else {
                    setTimer(10);
                    setIsLockedOut(true);
                  }
                }}
              >
                Click Here
              </button>
            );
          })}
      </div>
      <PuzzleComplete
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
      />
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
