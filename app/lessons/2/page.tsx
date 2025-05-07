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
      <h1 className={"text-center mb-10"}>Lesson 2: Swiping</h1>

      <div className="text-left bg-black/50 text-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Swiping is the most basic way to navigate while using a screen reader.
          Swiping left or right will make the screen reader focus shift to the
          next element in the content order. Usually, this will go left to
          right, top to bottom.
        </p>
        <p>
          Go to the practice area at the bottom of the page and try these steps.
        </p>
        <h3 className={"font-bold mt-10 mb-4 text-lg text-center"}>
          Swiping With A Mobile Screen Reader
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Turn on Screen Reader.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>Swipe RIGHT to move "forwards".</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Swipe LEFT to move "backwards".</span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/LM3QHsKPibw"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Swipe on a Mobile Phone Video
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-10 max-w-[500px] mx-auto justify-center">
        <a className="bg-white text-center p-3 mb-4" href="/lessons/">
          Lessons Homepage
        </a>
        <a className="bg-white text-center p-3 mb-8" href="/lessons/2/practice">
          Practice
        </a>
      </div>
    </div>
  );
}

export default Page;
