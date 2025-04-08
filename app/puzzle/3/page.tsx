"use client";

import React from "react";
import PuzzleFooter from "@/components/puzzle-footer";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        The portraits are silent to the eye, but one left behind a message.
        Check what’s written on the back.
      </p>
    </div>
  ),
};

const Puzzle3 = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen text-center p-4 pb-30">
      <h1 className="text-2xl font-bold pb-2">
        Puzzle 3: The Forgotten Gallery
      </h1>
      <h2 className="text-xl pb-4">
        The portraits are quiet. But one voice lingers...
      </h2>

      <p className={"sr-only"}>
        You step into a cold, breezy with no windows. The walls are lined with
        dusty portraits. Their eyes seem to follow you. The frames are aged, the
        faces silent, but one looks like they have a secret.
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        <img
          src="/husband.webp"
          alt="A faded portrait of a stern-looking husband. On the back of the painting it says: 'Taxes were the real horror.'"
          className="w-full h-auto"
        />
        <img
          src="/wife.webp"
          alt="An elegant woman in a dark gown. On the back: 'Don't forget to water the plants.'"
          className="w-full h-auto"
        />
        <img
          src="/daughter.webp"
          alt="A young girl with a mischievous smile. On the back: 'The code is 145.'"
          className="w-full h-auto"
        />
        <img
          src="/dog.webp"
          alt="A shaggy, but happy dog. On the back: 'Woof! Woof!'"
          className="w-full h-auto"
        />
      </div>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
};

export default Puzzle3;
