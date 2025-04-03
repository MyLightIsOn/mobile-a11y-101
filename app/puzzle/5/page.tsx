"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [inputValues, setInputValues] = useState(Array(6).fill(""));
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleSubmit = () => {
    const correctAnswer = inputValues[4].trim().toLowerCase();
    if (correctAnswer === "ibm") {
      setIsCorrect(true);
    } else {
      setIsLockedOut(true);
      setTimer(10);
      setInputValues(Array(6).fill(""));
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
        <h1 className="text-2xl font-bold pb-2">Puzzle 5:</h1>
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
        <h1 className="text-2xl font-bold pb-2">Puzzle 5:</h1>
        <h2 className="text-xl pb-4">Correct!</h2>
        <p className="text-green-400">
          You've solved it. Your number is <strong>5</strong>.
        </p>
      </div>
    );
  }

  const fields = [
    {
      visible: "Favorite Color",
      ariaLabel: "Hometown",
    },
    {
      visible: "Dream Job",
      ariaLabel: "This is not the correct field",
    },
    {
      visible: "Pet's Name",
      ariaLabel: "Nope, not this one either",
    },
    {
      visible: "Lucky Number",
      ariaLabel: "Favorite Color",
    },
    {
      visible: "Hometown",
      ariaLabel:
        "Answer this question in the field: Which company was the first screen reader invented at?",
    },
    {
      visible: "Lucky Number",
      ariaLabel: "Actually, you are unlucky if you got here",
    },
  ];

  return (
    <div className="bg-black text-white text-center p-4">
      <h1 className="text-2xl font-bold pb-2">Puzzle 5:</h1>
      <h2 className="text-xl pb-4">Label Logic</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-4 max-w-md mx-auto text-left"
      >
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-white mb-1" htmlFor={`field-${index}`}>
              {field.visible}
            </label>
            <input
              id={`field-${index}`}
              type="text"
              className="bg-gray-800 text-white px-4 py-2 rounded"
              value={inputValues[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              {...(field.ariaLabel ? { "aria-label": field.ariaLabel } : {})}
            />
          </div>
        ))}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
