import React from "react";

function Page() {
  return (
    <div
      className="p-4 min-h-screen"
      style={{
        backgroundImage: "url('/playground.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-center mb-10">Lesson 1: Screen Reader Setup</h1>

      <div className="text-left bg-black/50 text-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          If you have an Android or iOS device, it comes with a screen reader
          built in. Android's screen reader is called TalkBack, while the iOS
          screen reader is called VoiceOver.
        </p>
        <p>
          Below are instructions setting them up. It is super easy. This basic
          setup is enough to play this game.{" "}
        </p>
        <h3 className={"font-bold mt-10 mb-4 text-lg text-center"}>
          Setting up VoiceOver
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Open settings.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>Go to Accessibility.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Go to Accessibility Shortcuts.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 4</span> -{" "}
            <span>Tap/Activate VoiceOver.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 5</span> -{" "}
            <span>
              Practice turning the screen on and off by pressing the lock button
              3 quickly times.
            </span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/MAOKN2oyk9I"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Setup VoiceOver on an iPhone
          </p>
        </div>
        <h3 className={"font-bold mt-15 mb-4 text-lg text-center"}>
          Setting up TalkBack
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Open settings.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>Go to Accessibility.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Go to TalkBack.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 4</span> -{" "}
            <span>Tap TalkBack Shortcut</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 5</span> -{" "}
            <span>
              Practice turning the screen on and off by holding both volume
              keys.
            </span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/gkdk5FWt8RQ"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Setup TalkBack on an Android phone
          </p>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center text-black">
        <a className="bg-white text-center p-3 mb-4" href="/lessons/2">
          Next Lesson
        </a>
        <a className="bg-white text-center p-3 mb-14" href="/lessons/">
          Back
        </a>
      </div>
    </div>
  );
}

export default Page;
