"use client";

import React, { useState, useEffect } from "react";
import "@/app/mystery-button.css";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleCompleteButton from "@/components/puzzle-complete-button";
import { Trash2Icon, DeleteIcon } from "lucide-react";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        The table may be invisible, but its structure still speaks. Search the
        table to uncover the clue.
      </p>
    </div>
  ),
};

const puzzleSolvedContent = {
  puzzleNumber: 4,
  description: (
    <p className={"text-left"}>
      That was tough! Tables are very common on the internet, so learning how to
      visualize and navigate them is an essential skill for a screen reader
      user.
    </p>
  ),
};

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  const handleClick = (digit: string) => {
    if (inputValue.length < 4) {
      setInputValue((prev) => prev + digit);
    }
  };

  const handleClear = () => setInputValue("");
  const handleDelete = () => setInputValue(inputValue.slice(0, -1));

  const handleSubmit = () => {
    if (inputValue === "A11Y") {
      alert("🎉 Correct! Remember, the passcode is 'A11Y'");
    } else {
      setIsLockedOut(true);
      setTimer(10);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (isLockedOut && timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setIsLockedOut(false);
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

  const getMaskedInput = () => {
    return inputValue
      .padEnd(4, "-")
      .split("")
      .map((char, i) => (
        <span key={i} className="inline-block w-4 text-center">
          {char}
        </span>
      ));
  };

  return (
    <div
      className="bg-black w-screen overflow-hidden text-white text-center p-4"
      style={{
        backgroundImage: "url('/dining.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl font-bold pb-2 relative z-10">Puzzle 4:</h1>
      <h2 className="text-xl pb-4 relative z-10">The Table of Secrets</h2>
      <p className={"sr-only"}>
        The dining room is still set, as if waiting for guests who never came.
        At its center, a grand wooden table sits in silence. Drawers, nooks, and
        shadows hide its past. Search every inch!
      </p>

      <table
        title="Table of Secrets"
        className={"sr-only relative left-[-900%] opacity-0 -z-50"}
      >
        <thead>
          <tr>
            <th scope="col">Left Side</th>
            <th scope="col">Middle</th>
            <th scope="col">Right Side</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              On the left side of the desktop, it is just dusty and scratched.
              Nothing important.
            </td>
            <td>
              In the middle of the desktop, you see old dried out pens and some
              blank sheets of paper.
            </td>
            <td>On the right of the desktop, there is an old used candle</td>
          </tr>
          <tr>
            <td>
              In the left, top drawer you find more dust and spiders! Yikes!
            </td>
            <td>
              In the middle top drawer, there is an old sheet of paper with
              writing on it. It says “A11y”.
            </td>
            <td>The right top drawer is missing</td>
          </tr>
          <tr>
            <td>
              In the left bottom drawer, the bottom has fallen out. Whatever was
              here is long gone.
            </td>
            <td>In the middle bottom drawer, you find dust again.</td>
            <td>
              <span
                onClick={() => {
                  alert(
                    "🔑 You picked up the secret key! Maybe it will come in handy later.",
                  );
                  localStorage.setItem("secret_key", "true");
                }}
              >
                In the right bottom drawer, you find a key! You solved this
                puzzle. I wonder what it unlocks. Maybe you will find out later.
                Double tap this table cell to pick up the key.
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="-mt-15">
        <div className="mb-4 text-xl relative z-10">
          Passcode: {getMaskedInput()}
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-4">
          {["A", "B", "C", "X", "Y", "Z", 1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="mystery-button p-2! w-[60px] h-[55px] mx-auto mb-4"
            >
              {num}
            </button>
          ))}
          <button
            aria-label={"Delete Last Input"}
            onClick={handleDelete}
            className="mystery-button p-2! w-[60px] h-[55px] mx-auto"
          >
            <DeleteIcon className={"mx-auto"} />
          </button>
          <button
            key={0}
            onClick={() => handleClick("0")}
            className="mystery-button p-2! w-[60px] h-[55px] mx-auto"
          >
            {0}
          </button>
          <button
            aria-label={"Clear Input"}
            onClick={handleClear}
            className="mystery-button p-2! w-[60px] h-[55px] mx-auto"
          >
            <Trash2Icon className={"mx-auto"} />
          </button>
        </div>
        <PuzzleCompleteButton
          dialogContent={puzzleSolvedContent}
          puzzleSolved={puzzleSolved}
          buttonText={"Submit"}
          delay={inputValue !== "A11Y"}
        >
          <button
            aria-label={inputValue && "Enter passcode:" + inputValue}
            onClick={() => {
              if (inputValue !== "A11Y") {
                handleSubmit();
              } else {
                setPuzzleSolved(true);
                localStorage.setItem("puzzle_4_complete", "true");
              }
            }}
            className="mystery-button p-2! w-[85%] h-[55px] mx-auto mt-8 rounded-md! max-w-[280px]"
          >
            Submit
          </button>
        </PuzzleCompleteButton>
      </div>

      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
