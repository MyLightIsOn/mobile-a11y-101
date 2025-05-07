import React from "react";
import Lightbulb from "@/components/lightbulb";
import "@/app/lightbulb.css";

function Page() {
  return (
    <div
      className={"bg-black text-center min-h-screen w-screen overflow-hidden"}
      style={{
        backgroundImage: "url('/shed.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Lightbulb>
        <h1 className={"text-center"}>Rotor Practice</h1>
        <div className={"p-8 pb-0"}>
          <p>Turn on your screen reader.</p>
          <p>Use the Rotor/Reading Controls to select headings.</p>
          <p>Swipt UP or DOWN this time.</p>
          <h2 className={"font-bold !text-xl pt-8"}>This is a Heading</h2>
          <p>
            Notice how it skips this text? This is a common technique for
            quicklyl traverse a web page.
          </p>
          <p>Otherwise you would have ot swipe through each line.</p>
          <h3 className={"font-bold !text-xl pt-8"}>
            This is a another Heading
          </h3>
          <p>
            Headings come in different levels. The number indicates it's
            importances.
          </p>
          <a className={"underline"} href="#">
            Link Example 1
          </a>
          <p>There are 6 heading levels, with one being the most important.</p>
          <h4 className={"font-bold !text-4xl pt-8"}>Last Heading</h4>
          <p>
            Visually, the Heading level 1 is usually the biggest heading, but
            that is not always the case.
          </p>
          <a className={"underline"} href="#">
            Link Example 2
          </a>
          <p>
            Remember, screen readers do not see, so it does not matter what
            size, visually, the heading is.
          </p>
          <h2 className={"font-bold !text-xl pt-8"}>
            This also works with links
          </h2>

          <p>Remember, you can change these element types in the settings</p>
          <a className={"underline"} href="#">
            Link Example 3
          </a>
          <p>But to play this game, it's not required to change them.</p>
        </div>
        <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center text-black">
          <a className="bg-white text-center p-3 mb-4" href="/lessons/4">
            Next Lesson
          </a>
          <a className="bg-white text-center p-3 mb-14" href="/lessons/3">
            Back
          </a>
        </div>
      </Lightbulb>
    </div>
  );
}

export default Page;
