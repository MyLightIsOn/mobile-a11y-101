"use client";
import { useEffect, useState } from "react";

interface Button {
  visible: string;
  aria: string;
  isCorrect: boolean;
}

const Page = () => {
  const [buttons, setButtons] = useState([
    { visible: "", aria: "", isCorrect: false },
  ]);

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
      "Don't Press",
      "Definitely Not",
      "Press Here?",
      "Still Not This",
      "Nope",
      "Try Again",
      "Incorrect",
      "Almost",
      "Whoops",
    ];

    // Choose a random index that is NOT 0
    const correctIndex = Math.floor(Math.random() * (texts.length - 1)) + 1;

    const buttons = texts.map((text, index) => ({
      visible: text,
      aria: "Do not press",
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
      alert("🎉 Correct! The password is 'midnight'");
    } else {
      const newButtons: Array<Button> = generateButtons();
      setButtons(newButtons);
    }
  }

  useEffect(() => {
    setButtons(generateButtons());
  }, []);

  return (
    <div className="bg-black text-white text-center p-4">
      <h1 className="text-2xl font-bold pb-2">Puzzle 2:</h1>
      <h2 className="text-xl pb-4">The Forbidden Button</h2>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {buttons?.length > 2 &&
          buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleClick(btn.isCorrect);
              }}
              aria-label={btn.aria}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              {btn.visible}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Page;
