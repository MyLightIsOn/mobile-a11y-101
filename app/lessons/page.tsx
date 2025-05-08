import React from "react";

function Page() {
  return (
    <div
      className={"min-h-screen relative"}
      style={{
        backgroundImage: "url('/playground.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={
          "bg-black absolute left-0 bottom-0 opacity-30 w-screen h-full"
        }
      />
      <div className={"p-4 relative z-10"}>
        <h1 className={"text-center mb-10"}>Practice Playground</h1>

        <div className="text-left text-white p-4 rounded-sm info-box max-w-[500px] mx-auto bg-black/50">
          <p>
            Thank you for trying the Mobile Mystery House. This game is an
            introduction to using a mobile screen reader in a fun, immersive
            way.
          </p>
          <p>
            The lessons below will guide you through the core gestures and
            navigation skills you'll need to uncover clues and solve puzzles.
          </p>
          <p>Start with Lesson 1, and take your time exploring each page.</p>
        </div>

        <div className="flex flex-col pt-10 max-w-[500px] mx-auto text-white">
          <a className="text-center p-3 mb-8" href="/lessons/1">
            <span className={"font-bold underline"}>
              Lesson 1 - Screen Reader Setup
            </span>{" "}
            <br />
            Turning on shortcuts
          </a>
          <a className="text-center p-3 mb-8" href="/lessons/2">
            <span className={"font-bold underline"}>Lesson 2 - Swiping</span>
            <br />
            Move element by element
          </a>
          <a className="text-center p-3 mb-8" href="/lessons/3">
            <span className={"font-bold underline"}>
              Lesson 3 - Rotor/Reading Controls
            </span>{" "}
            <br />
            Jump by content type
          </a>
          <a className="text-center p-3 mb-8" href="/lessons/4">
            <span className={"font-bold underline"}>
              Lesson 4 - Activating Elements
            </span>{" "}
            <br />
            Interact with buttons and links
          </a>
          <a className="text-center p-3 mb-8" href="/lessons/5">
            <span className={"font-bold underline"}>
              Lesson 5 - Navigating Tables
            </span>{" "}
            <br />
            Understand structured data
          </a>
          <a
            className="text-center p-3 mb-8 bg-white text-black"
            href="/getting-started"
          >
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
