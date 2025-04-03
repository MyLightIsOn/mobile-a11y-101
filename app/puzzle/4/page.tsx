"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleClick = (digit: string) => {
    if (inputValue.length < 3) {
      setInputValue((prev) => prev + digit);
    }
  };

  const handleClear = () => setInputValue("");
  const handleDelete = () => setInputValue(inputValue.slice(0, -1));

  const handleSubmit = () => {
    if (inputValue === "508") {
      setIsCorrect(true);
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
      <div className="bg-black text-white text-center p-4">
        <h1 className="text-2xl font-bold pb-2">Puzzle 4:</h1>
        <h2 className="text-xl pb-4">Locked Out</h2>
        <p className="text-red-500">
          Too many incorrect guesses. Try again in {timer} seconds...
        </p>
      </div>
    );
  }

  if (isCorrect) {
    return (
      <div className="bg-black text-white text-center p-4">
        <h1 className="text-2xl font-bold pb-2">Puzzle 4:</h1>
        <h2 className="text-xl pb-4">Correct!</h2>
        <p className="text-green-400">
          You've solved it. Your number is <strong>3</strong>.
        </p>
      </div>
    );
  }

  const getMaskedInput = () => {
    return inputValue
      .padEnd(3, "-")
      .split("")
      .map((char, i) => (
        <span key={i} className="inline-block w-4 text-center">
          {char}
        </span>
      ));
  };

  return (
    <div className="bg-black text-white text-center p-4">
      <h1 className="text-2xl font-bold pb-2">Puzzle 4:</h1>
      <h2 className="text-xl pb-4">The Table of Secrets</h2>

      {/* Visually hidden table, accessible to screen readers */}
      <table className="sr-only">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
            <th scope="col">Clue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>Library</td>
            <td>Offline</td>
            <td>Nothing here</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Garden</td>
            <td>Active</td>
            <td>The passcode is 508</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>Basement</td>
            <td>Unknown</td>
            <td>Wrong cell</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <div className="mb-4 text-xl">Input: {getMaskedInput()}</div>
        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleDelete}
            className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded col-span-1"
          >
            Back
          </button>
          <button
            key={0}
            onClick={() => handleClick("0")}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            {0}
          </button>
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded col-span-1"
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded col-span-3"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
