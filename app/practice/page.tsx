import React from "react";

function Page() {
  return (
    <div>
      <div className={"p-4"}>
        <h1 className={"text-center mb-10"}>Practice</h1>

        <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
          <p>
            Thank you for trying the Mobile Mystery House. This game is an
            introduction to using a mobile screen reader in a fun, immersive
            way.
          </p>
          <p>
            The lessons below will guide you through the core gestures and
            navigation skills you'll need to uncover clues and solve each
            puzzle.
          </p>
          <p>Start with Lesson 1, and take your time exploring each page.</p>
        </div>

        <div className="flex flex-col pt-10 max-w-[500px] mx-auto">
          <a className="bg-white text-center p-3 mb-8" href="/practice/1">
            <span className={"font-bold"}>Lesson 1 - Swiping</span>
            <br />
            Move element by element
          </a>
          <a className="bg-white text-center p-3 mb-8" href="/practice/2">
            <span className={"font-bold"}>Lesson 2 - Rotor/Menu</span> <br />
            Jump by content type
          </a>
          <a className="bg-white text-center p-3 mb-8" href="/practice/3">
            <span className={"font-bold"}>Lesson 3 - Activating Elements</span>{" "}
            <br />
            Interact with buttons and links
          </a>
          <a className="bg-white text-center p-3 mb-8" href="/practice/4">
            <span className={"font-bold"}>Lesson 4 - Input Fields</span> <br />
            Typing into labeled forms
          </a>
          <a className="bg-white text-center p-3 mb-8" href="/practice/5">
            <span className={"font-bold"}>Lesson 5 - Navigating Tables</span>{" "}
            <br />
            Understand structured data
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
