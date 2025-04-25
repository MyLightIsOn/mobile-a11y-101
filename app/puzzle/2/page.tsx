"use client";
import React, { useEffect, useState } from "react";
import "@/app/mystery-button.css";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleCompleteButton from "@/components/puzzle-complete-button";

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
  puzzleNumber: 1,
  description: (
    <p className={"text-left"}>
      Button text is important. Having phrases like click here are ambiguous and
      unhelpful. Good text is a foundation of a good experience.
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
    const correctIndex = Math.floor(Math.random() * (texts.length - 1)) + 1;

    const buttons = texts.map((text) => ({
      visible: text,
      aria: "Do Not Click Here",
      isCorrect: false,
    }));

    // Set the correct button
    buttons[correctIndex] = {
      visible: texts[correctIndex],
      aria: 'This is the right one!"',
      isCorrect: true,
    };

    // Shuffle the buttons AFTER assigning the correct one
    return shuffle(buttons);
  }

  function handleClick(isCorrect: boolean) {
    if (isCorrect) {
      setPuzzleSolved(true);
      localStorage.setItem("puzzle_2_complete", "true");
    } else {
      const newButtons: Array<Button> = generateButtons();
      setButtons(newButtons);
    }
  }

  useEffect(() => {
    setButtons(generateButtons());
  }, []);

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

      <p className={"sr-only"}>
        You enter the living room. The fireplace has long gone cold, but
        something hums faintly on the coffee table. A set of old buttons sit in
        a neat row—none marked correctly, all tempting. One of them knows the
        way forward.
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {buttons?.length > 2 &&
          buttons.map((btn, idx) => {
            if (btn.isCorrect) {
              return (
                <PuzzleCompleteButton
                  key={idx}
                  dialogContent={puzzleSolvedContent}
                  puzzleSolved={puzzleSolved}
                  buttonText={"Click Here!"}
                >
                  <button
                    className="mystery-button mb-5 h-[80px]"
                    style={{
                      borderRadius: "12px",
                      padding: "4px",
                      fontSize: "14px",
                    }}
                    onClick={() => {
                      setPuzzleSolved(true);
                      localStorage.setItem("puzzle_2_complete", "true");
                    }}
                  >
                    {btn.visible}
                  </button>
                </PuzzleCompleteButton>
              );
            } else {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    handleClick(btn.isCorrect);
                  }}
                  aria-label={btn.aria}
                  className="mystery-button mb-5 h-[80px]"
                  style={{
                    borderRadius: "12px",
                    padding: "4px",
                    fontSize: "14px",
                  }}
                >
                  {btn.visible}
                </button>
              );
            }
          })}
      </div>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
