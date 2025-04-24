"use client";
import React, { useState, useEffect } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleCompleteButton from "@/components/puzzle-complete-button";
import "@/app/eyes.css";

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
      reader or not. Now you know how to use this powerful feature.
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
      className={"bg-black text-center p-4 h-screen"}
      style={{
        backgroundImage: "url('/basement.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/*{puzzleSolved && <Confetti />}*/}
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
      <p className={"sr-only"}>
        The air grows colder as you descend into the basement. The light
        flickers and fades, then darkness. You hear the creak of old wood and
        nothing else. You’ll need to feel your way through this one… with your
        ears.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        You reached this because you are swiping. Instead, try to skip around by
        a different content type. For example, paragraphs, links, or even
        headings.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Stop swiping. It will take you much longer to get to the headings.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        I see that you don't believe me. You are going to learn the hard way.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Are there 10 more or 100? Who knows...
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Seriously, you are insane.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        If you have gotten to this point, you at least know how to swipe with a
        screen reader.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        But you need some serious help.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        OMG! STOOOOOOOOOOOOOOP!!!
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        You found a heading, but this is not the right one. Keep looking.
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Not this one either
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Nope
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Getting closer
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Almost
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        The passcode is "246"
      </h3>
      <PuzzleCompleteButton
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
        onClick={() => {
          setPuzzleSolved(true);
          localStorage.setItem("puzzle_1_complete", "true");
        }}
      />
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        You missed it
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Turn back around
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        You're way off
      </h3>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        You reached this because you are swiping
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Stop swiping. It will take you much longer to get to the headings.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        I see that you don't believe me. You are going to learn the hard way.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Are there 10 more or 100? Who knows...
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden sr-only"
        }
      >
        Surprise! Another useless paragraph of text.
      </p>
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
}

export default Page;
