"use client";
import React, { useState, useEffect } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleComplete from "@/components/puzzle-complete";
import "@/app/eyes.css";
import puzzleComplete from "@/lib/puzzleComplete";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>
        Some structures are hidden from sight but not from sound. Try navigating
        by headings.
      </p>
    </div>
  ),
};

const puzzleSolvedContent = {
  puzzleNumber: 1,
  description: (
    <p className={"text-left"}>
      Navigating with headings is something we all do, whether using a screen
      reader or not. Now you know how to use this powerful feature. Turn your
      screen reader off and tap OK.
    </p>
  ),
};

function Page() {
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [divsVisibility, setDivsVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    const newStartTime = new Date();
    setStartTime(newStartTime);
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDivsVisibility((currentVisibility) => {
        const firstHiddenDivIndex = currentVisibility.indexOf(false);
        if (firstHiddenDivIndex === -1) {
          return currentVisibility;
        }

        const newVisibility = [...currentVisibility];
        newVisibility[firstHiddenDivIndex] = true;
        return newVisibility;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={
        "bg-black text-center p-4 min-h-screen w-screen overflow-hidden"
      }
      style={{
        backgroundImage: "url('/basement.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={
          "absolute bg-black top-0 left-0 opacity-60 w-screen h-screen"
        }
      />
      <h1 className={"font-bold text-2xl pb-2 relative z-10"}>Puzzle 1:</h1>
      <h2 className={"text-xl pb-20 text-white font-bold relative z-10"}>
        Heading Into The Shadows
      </h2>

      {divsVisibility[0] && (
        <div className={"absolute top-[20%] left-[20%]"}>
          <div className="spy">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      )}
      {divsVisibility[1] && (
        <div className={"absolute top-[30%] right-[10%]"}>
          <div className="spy">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      )}
      {divsVisibility[2] && (
        <div className={"absolute bottom-[40%] left-[30%]"}>
          <div className="spy">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      )}
      {divsVisibility[3] && (
        <div className={"absolute bottom-[20%] left-[15%]"}>
          <div className="spy">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      )}
      {divsVisibility[4] && (
        <div className={"absolute bottom-[10%] right-[20%]"}>
          <div className="spy">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
      )}
      <div className={"sr-only -left-96 -top-96"}>
        <p className={"text-white"}>
          The air grows colder as you descend into the basement. The light
          flickers and fades, then darkness. You hear the creak of old wood and
          nothing else. You’ll need to feel your way through this one… with your
          ears.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
          }
        >
          You reached this because you are swiping. Instead, try to skip around
          by a different content type. For example, paragraphs, links, or even
          headings.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Stop swiping. It will take you much longer to get to the headings.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          I see that you don't believe me. You are going to learn the hard way.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Are there 10 more or 100? Who knows?
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Seriously, you are insane.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          If you have gotten to this point, you at least know how to swipe with
          a screen reader.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          But you need some serious help.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          OMG! STOOOOOOOOOOOOOOP!!!
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <h3
          className={
            "opacity-0 absolute bottom-0 right-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          You found a heading, but this is not the right one. You are on the
          right track. Keep looking.
        </h3>
        <h3
          className={
            "opacity-0 absolute bottom-0 right-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Not this one either, but you are closer
        </h3>
        <h3
          className={
            "opacity-0 absolute bottom-0 right-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Getting closer
        </h3>
        <h3
          className={
            "opacity-0 absolute bottom-0 right-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Almost
        </h3>
        <h3
          className={"sr-only"}
          onClick={() => {
            setPuzzleSolved(true);
            puzzleComplete("puzzle_1", startTime, elapsedTime.toString());
          }}
        >
          Congratulations! Puzzle 1 has been completed. Double tap this heading
          to continue.
        </h3>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          You reached this because you are swiping
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Stop swiping. It will take you much longer to get to the headings.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          I see that you don't believe me. You are going to learn the hard way.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Are there 10 more or 100? Who knows...
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
        <p
          className={
            "absolute bottom-0 right-0 opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden "
          }
        >
          Surprise! Another useless paragraph of text.
        </p>
      </div>
      <PuzzleComplete
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
      />
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
}

export default Page;
