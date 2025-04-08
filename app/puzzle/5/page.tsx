"use client";

import React, { useState, useEffect } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import "@/app/mystery-button.css";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        Not every label tells the whole story. One field is asking the right
        question...can you find it?
      </p>
    </div>
  ),
};

const Page = () => {
  const [inputValues, setInputValues] = useState(Array(6).fill(""));
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [timer, setTimer] = useState(10);

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleSubmit = () => {
    const correctAnswer = inputValues[2].trim().toLowerCase();
    if (correctAnswer === "enter") {
      alert("🎉 Correct! The passcode is '332'");
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

  const fields = [
    {
      visible: "Library",
      ariaLabel: "Study",
    },
    {
      visible: "Attic",
      ariaLabel: "Pantry",
    },
    {
      visible: "Study",
      ariaLabel: "This is the right field. Type Enter and see what happens.",
    },
    {
      visible: "Pantry",
      ariaLabel: "Attic",
    },
  ];

  return (
    <div
      className="text-white text-center p-4 h-screen bg-black "
      style={{
        backgroundImage: "url('/hallway.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-2xl font-bold pb-2">Puzzle 5:</h1>
      <h2 className="text-xl pb-4">Label Logic</h2>
      <p className={"sr-only"}>
        The hallway stretches longer than it should, lined with mismatched doors
        and flickering sconces. Each door is labeled—but the labels lie. Type
        the word Enter into the right field?
      </p>

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
          <button type="submit" className="mystery-button">
            Submit
          </button>
        </div>
      </form>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
