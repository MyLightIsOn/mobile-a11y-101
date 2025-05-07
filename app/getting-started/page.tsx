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
          This game is designed for mobile screen reader.
        </li>

        <li className={"mb-4"}>
          For each puzzle, SWIPE until you hear instructions. They are only
          visible to screen readers.
        </li>

        <li className={"mb-4"}>Don’t trust your eyes!</li>

        <li className={"mb-4"}>
          If you get stuck on a puzzle, tap me for a hint.
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
      <h1 className={"text-center text-2xl font-bold mb-4"}>Welcome</h1>
      <div className={"flex flex-col mx-auto gap-4 max-w-[500px]"}>
        <a
          href={"/lessons"}
          className={
            "text-white text-center underline px-10 py-4 border-white border focus:border-dashed hover:border-dashed mx-auto w-full min-w-60 uppercase"
          }
        >
          Practice
        </a>
        <a
          href={"/start"}
          className={
            "text-white text-center underline px-10 py-4 border-white border focus:border-dashed hover:border-dashed mx-auto w-full uppercase"
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
