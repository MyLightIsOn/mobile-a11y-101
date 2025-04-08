"use client";

import React, { useState, useEffect } from "react";
import "@/app/mystery-button.css";
import PuzzleFooter from "@/components/puzzle-footer";
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

const Page = () => {
  const [inputValue, setInputValue] = useState("");
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
    if (inputValue === "131") {
      alert("🎉 Correct! Remember, the passcode is '131'");
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
      .padEnd(3, "-")
      .split("")
      .map((char, i) => (
        <span key={i} className="inline-block w-4 text-center">
          {char}
        </span>
      ));
  };

  return (
    <div
      className="bg-black h-screen w-screen overflow-hidden text-white text-center p-4"
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
        className="absolute -top-[200%] table w-[100px]"
        title="The Table of Secrets"
      >
        <thead>
          <tr>
            <th scope="col">Table Area</th>
            <th scope="col">Contents</th>
            <th scope="col">Search Results</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Right Drawer</td>
            <td>Empty</td>
            <td>Just dust</td>
          </tr>
          <tr>
            <td>Left Drawer</td>
            <td>Faded Photos</td>
            <td>Nothing on the back</td>
          </tr>
          <tr>
            <td>Underneath</td>
            <td>Secret Compartment</td>
            <td>A piece of paper with the number 131 written on it</td>
          </tr>
          <tr>
            <td>Tabletop</td>
            <td>A cracked mirror</td>
            <td>Your reflection looks... different</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6">
        <div className="mb-4 text-xl relative z-10">
          Passcode: {getMaskedInput()}
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
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
        <button
          aria-label={inputValue && "Enter passcode:" + inputValue}
          onClick={handleSubmit}
          className="mystery-button p-2! w-[85%] h-[55px] mx-auto mt-8 rounded-md!"
        >
          Submit
        </button>
      </div>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Page;
