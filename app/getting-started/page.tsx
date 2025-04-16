"use client";

import React, { ReactNode } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import "@/app/mystery-button.css";

interface DialogContentType {
  title: string;
  description: ReactNode;
}

const dialogContent: DialogContentType = {
  title: "How To Play",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <ol className={"list-decimal px-5"}>
        <li className={"mb-4"}>
          This game is designed for mobile screen reader users.
        </li>

        <li className={"mb-4"}>
          Explore each page using gestures, taps, and focus navigation.
        </li>

        <li className={"mb-4"}>
          Listen carefully as some clues are only spoken, rarely seen.
        </li>

        <li className={"mb-4"}>
          Tap the Spookeasy button if you get stuck and need a hint.
        </li>
      </ol>
    </div>
  ),
};

function Page() {
  return (
    <div
      className={"flex flex-col p-4 min-h-screen justify-center"}
      style={{
        backgroundImage: "url('/front-door.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* This overlay makes it so users have to use a screen reader to get into the game. I have disabled it for now. */}
      {/*<div className={"absolute bottom-0 right-0"} />*/}
      <h1 className={"text-center mb-10"}>
        Welcome to the Mobile Mystery House
      </h1>
      <div
        className={
          "text-left mb-10 bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto"
        }
      >
        <p className={"text-black"}>
          You stand at the door of the Mobile Mystery House. A place where
          everything is not what it seems. Don’t trust your eyes! What’s hidden
          may only be revealed through other senses.
        </p>

        <p>Turn on your screen reader. Follow the clues. Solve the mystery!</p>
        <p>* Tap on Spookeasy to see How To Play!</p>
      </div>
      <div className={"flex pb-56 gap-4"}>
        <a
          href={"/practice"}
          className={
            "text-white text-center underline px-10 py-4 border-white border focus:border-dashed hover:border-dashed mx-auto w-1/2"
          }
        >
          Practice
        </a>
        <a
          href={"/start"}
          className={
            "text-white text-center underline px-10 py-4 border-white border focus:border-dashed hover:border-dashed mx-auto w-1/2"
          }
        >
          Enter
        </a>
      </div>
      <PuzzleFooter dialogContent={dialogContent} />
    </div>
  );
}

export default Page;
