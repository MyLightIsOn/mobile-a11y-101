"use client";
import React, { useState, useEffect } from "react";
import "@/app/eyes.css";

function Page() {
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
    <div className={"bg-black text-center p-4 h-screen"}>
      <h1 className={"font-bold text-2xl pb-2"}>Puzzle 1:</h1>
      <h2 className={"text-xl"}>Heading Into The Shadows</h2>
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

      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        You reached this because you are swiping
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Stop swiping. It will take you much longer to get to the headings.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        I see that you don't believe me. You are going to learn the hard way.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Are there 10 more or 100? Who knows...
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>
      <p
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Suprise! Here's another paragraphy.
      </p>

      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Not this one
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Not this one either
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Nope
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Getting closer
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Almost
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        The passcode is "246"
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        You missed it
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        Turn back around
      </h3>
      <h3
        className={
          "opacity-0 select-none pointer-events-none w-0 h-0 overflow-hidden"
        }
      >
        You're way off
      </h3>
    </div>
  );
}

export default Page;
