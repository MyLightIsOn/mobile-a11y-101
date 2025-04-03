"use client";

import { useState, useEffect } from "react";

const Puzzle3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValue.trim().toLowerCase() === "sunrise") {
      setIsCorrect(true);
    } else {
      setIsLockedOut(true);
      setTimer(10);
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
      setInputValue("");
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

  if (isCorrect) {
    return (
      <div className="text-white text-center p-4 h-screen">
        <h1 className="text-2xl font-bold pb-2">Puzzle 3:</h1>
        <h2 className="text-xl pb-4">Correct!</h2>
        <div className={"bg-green-100 p-10 rounded-md"}>
          <p className="text-green-900 h-full w-full">
            You've solved it. The next number is:
            <strong className={"text-6xl mt-3 block"}>7</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white text-center p-4 h-screen">
      <h1 className="text-2xl font-bold pb-2">Puzzle 3:</h1>
      <h2 className="text-xl pb-4">Label Me This</h2>

      {/* Misleading aria-hidden text elements */}
      <div className="sr-only">
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
        <p>Wrong way</p>
        <p>Nope</p>
        <p>Try again</p>
        <p>Still not it</p>
        <p>You’re getting colder</p>
        <p>Turn back?</p>
        <p>Why are you still here?</p>
        <p>Definitely not the clue</p>
        <p>So close but not really</p>
      </div>

      {/* Hidden label that is NOT visible or swipeable */}
      <div className="sr-only" id="input-label">
        Type the word sunrise
      </div>

      <p className="mt-6 mb-2">Password: Misleading</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-labelledby="input-label"
          className="bg-gray-800 text-white px-4 py-2 rounded text-center"
          placeholder="Enter the password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Puzzle3;
