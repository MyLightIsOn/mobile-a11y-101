import React from "react";
import GhostHelper from "@/components/ghost-helper";

function Page() {
  return (
    <div className={"flex flex-col w-screen h-screen overflow-hidden p-4"}>
      <div className={"absolute bottom-0 right-0"}>{/* <GhostHelper />*/}</div>
      <h1 className={"text-center mb-10"}>Welcome to Mobile Mysteries</h1>
      <div className={"text-left mb-10 bg-white p-4 rounded-sm info-box"}>
        <p className={"text-black"}>
          You’ve entered a place where everything is not what it seems. Don’t
          trust your eyes! What’s hidden may only be revealed through other
          senses.
        </p>

        <p>Turn on your screen reader. Follow the clues. Solve the mystery!</p>
        <p>* Tap on Spookeasy to see How To Play!</p>
      </div>

      <button className={"mystery-button mx-auto"}>Enter</button>
      <div className={"fixed bottom-0 right-0"}>
        <GhostHelper />
      </div>
    </div>
  );
}

export default Page;
