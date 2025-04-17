"use client";

import { useState, useRef } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (inputValue.trim().toLowerCase() === "a11y") {
      alert(
        "Correct! Input fields and labels are common and critical in accessibility. During the game, if you encounter a form field, make sure to pay attention to the label (wink, wink).",
      );
      setError("");
    } else {
      setError("That's not quite right. Try again.");
      inputRef.current?.focus();
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center mb-10">Lesson 4: Input Fields</h1>

      <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Input fields allow screen reader users to type in answers or provide
          information. They must be labeled properly so the screen reader can
          announce their purpose.
        </p>
        <div className="bg-gray-200 text-center text-black p-6 rounded mb-6">
          {/* Video placeholder */}
          <p className="italic">[Video demo coming soon]</p>
        </div>
        Try typing the correct answer below and submitting it.
      </div>

      <div className="text-white p-4 pt-10 max-w-[500px] mx-auto">
        <label htmlFor="abbreviation" className="block text-lg font-bold mb-2">
          What is the abbreviation for accessibility? (Answer: a11y)
        </label>
        <input
          id="abbreviation"
          ref={inputRef}
          type="text"
          className="block w-full px-2 py-1 bg-black text-white border"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-describedby="error-text"
        />
        {error && (
          <p id="error-text" className="text-red-400 mt-2">
            {error}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col pt-10">
        <a className="bg-white text-center p-3 mb-8" href="/practice/">
          Back
        </a>
      </div>
    </div>
  );
};

export default Page;
