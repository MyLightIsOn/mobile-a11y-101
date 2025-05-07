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
        <h1 className={"text-center"}>Swipe Practice</h1>
        <div className={"p-8 pb-0"}>
          <p>Turn on your screen reader.</p>
          <p>Swipe right to move to the screen reader focus next element.</p>
          <p>Swipe left to go back.</p>
          <p>This will move to ALL elements with readable text.</p>
          <p>Such as buttons, links, images, etc.</p>
          <p>
            After you have practiced a bit, turn off your screen reader and tap
            the lightbulb to "turn off the lights".
          </p>
          <p>
            With the lights off, turn your screen reader back on and try these
            same gestures.
          </p>
          <p>
            When you are done, turn off your screen reader and go to the next
            lesson
          </p>
        </div>
        <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center text-black">
          <a className="bg-white text-center p-3 mb-4" href="/lessons/3">
            Next Lesson
          </a>
          <a className="bg-white text-center p-3 mb-14" href="/lessons/2">
            Back
          </a>
        </div>
      </Lightbulb>
    </div>
  );
}

export default Page;
