import React from "react";

function Page() {
  return (
    <div
      className={"min-h-screen"}
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
          "bg-black absolute top-0 left-0 opacity-30 w-screen h-screen"
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
          <a className="text-center p-3 mb-8" href="/practice/1">
            <span className={"font-bold"}>Lesson 1 - Swiping</span>
            <br />
            Move element by element
          </a>
          <a className="text-center p-3 mb-8" href="/practice/2">
            <span className={"font-bold"}>
              Lesson 2 - Rotor/Reading Controls
            </span>{" "}
            <br />
            Jump by content type
          </a>
          <a className="text-center p-3 mb-8" href="/practice/3">
            <span className={"font-bold"}>Lesson 3 - Activating Elements</span>{" "}
            <br />
            Interact with buttons and links
          </a>
          <a
            className="text-center p-3 mb-8 bg-white text-black"
            href="/getting-started"
          >
            Back
          </a>
          {/*<a className="bg-white text-center p-3 mb-8" href="/practice/4">
            <span className={"font-bold"}>Lesson 4 - Input Fields</span> <br />
            Typing into labeled forms
          </a>
          <a className="bg-white text-center p-3 mb-8" href="/practice/5">
            <span className={"font-bold"}>Lesson 5 - Navigating Tables</span>{" "}
            <br />
            Understand structured data
          </a>*/}
        </div>
      </div>
    </div>
  );
}

export default Page;
