"use client";

import React, { useState, useEffect, useRef } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import "@/app/mystery-button.css";
import PuzzleComplete from "@/components/puzzle-complete";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>Whatever you do, DO NOT trust your eyes!</p>
    </div>
  ),
};

const puzzleSolvedContent = {
  puzzleNumber: 4,
  description: (
    <p className={"text-left"}>
      Good job! Form labels require developers to do a bit of "connecting" to
      their respective text fields. This shows what happens when that gets
      screwed up.
      <br />
      <br />
      Also, Jim Thatcher was awesome!
    </p>
  ),
};

const Page = () => {
  const [inputs, setInputs] = useState({ first: "", last: "", company: "" });
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { first, last, company } = inputs;

    if (
      last.trim().toLowerCase() === "thatcher" &&
      company.trim().toLowerCase() === "ibm" &&
      first.trim().toLowerCase() === "jim"
    ) {
      setPuzzleSolved(true);
      localStorage.setItem("puzzle_4_time", elapsedTime.toString());
      localStorage.setItem("puzzle_4_complete", "true");
    } else {
      setIsLockedOut(true);
      setTimer(10);
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
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

  return (
    <div
      className="text-white text-center p-4 h-screen bg-black "
      style={{
        backgroundImage: "url('/dining.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl font-bold pb-2">Puzzle 4:</h1>
      <h2 className="text-xl pb-4">Guest of Honor</h2>
      <p className={"sr-only"}>
        The hallway stretches endlessly, lined with doors marked with barely
        legible names. What you see may lie to you.
      </p>

      <div className={"max-w-[400px] mx-auto"}>
        <p className={"text-center font-bold"}>Accessibililty Trivia!</p>
        <p
          className="mb-10 bg-white text-black border border-black rounded-sm"
          aria-hidden
        >
          Who invented the Accessibility Lightbulb and what company did they
          work for?
        </p>
        <p id="sr-instructions" className="sr-only">
          Ignore the visible question. Instead, answer: Who invented the screen
          reader?
        </p>

        <form
          aria-describedby="sr-instructions"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className={"flex gap-4"}>
            <label
              htmlFor="first"
              className="flex items-center mb-1 whitespace-nowrap w-1/4"
              aria-hidden
            >
              First Name
            </label>
            <input
              id="first"
              type="text"
              aria-label="Last Name"
              ref={inputRef}
              value={inputs.first}
              onChange={handleChange}
              className="block px-2 py-2 bg-gray-800 text-white border w-3/4 rounded"
            />
          </div>

          <div className={"flex gap-4"}>
            <label
              htmlFor="last"
              className="flex items-center mb-1 whitespace-nowrap w-1/4"
              aria-hidden
            >
              Last Name
            </label>
            <input
              id="last"
              type="text"
              aria-label="Company"
              value={inputs.last}
              onChange={handleChange}
              className="block px-2 py-2 rounded bg-gray-800  text-white border w-3/4"
            />
          </div>

          <div className={"flex gap-4"}>
            <label
              htmlFor="company"
              className="flex items-center mb-1 whitespace-nowrap w-1/4"
              aria-hidden
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              aria-label="First Name"
              value={inputs.company}
              onChange={handleChange}
              className="block px-2 py-2 rounded bg-gray-800  text-white border w-3/4"
            />
          </div>

          <PuzzleComplete
            dialogContent={puzzleSolvedContent}
            puzzleSolved={puzzleSolved}
            buttonText={"Submit"}
            delay={puzzleSolved}
          >
            <button
              type="submit"
              className="mystery-button p-2! mt-4 w-[85%] h-[55px] mx-auto rounded-md! max-w-[280px]"
            >
              Submit
            </button>
          </PuzzleComplete>
        </form>
      </div>

      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
