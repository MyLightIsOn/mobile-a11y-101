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
      <h1 className="text-center mb-10">Lesson 3: Rotor / Reading Controls</h1>

      <div className="text-left bg-black/50 text-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          The Rotor (on iOS) or Reading Controls (on Android) helps you jump
          through content by type, like headings, links, lists, and more.
          Instead of swiping through all the content on a apage, this is a more
          efficient way to browse.
        </p>
        <p>
          Below are instructions for iOS and Android. Turn on your screen reader
          and use the rotor or reading controls to browse this page by content
          type. Try jumping to each heading, then the list, and then explore the
          different sections.
        </p>
        <h3 className={"font-bold mt-10 mb-4 text-lg text-center"}>
          Using the Rotor on iOS
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Turn on Screen Reader.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>Twist two fingers in a circle to select a content type.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Swipe DOWN to move "forwards".</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 4</span> -{" "}
            <span>Swipe UP to move "backwards".</span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/GwAoZ8u2TxY"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Use The Rotor On An iPhone Video
          </p>
        </div>
        <h3 className={"font-bold mt-15 mb-4 text-lg text-center"}>
          Using the Reader Controls on Android
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Turn on Screen Reader.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>Swipe down with three fingers to select a content type.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Swipe DOWN to move "forwards".</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 4</span> -{" "}
            <span>Swipe UP to move "backwards".</span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/brYkq82apbY"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Use Reading Controls On An Andorid Phone
          </p>
        </div>
      </div>

      <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center">
        <a className="bg-white text-center p-3 mb-4" href="/lessons/3/practice">
          Practice
        </a>
        <a className="bg-white text-center p-3 mb-14" href="/lessons/">
          Lessons Homepage
        </a>
      </div>
    </div>
  );
}

export default Page;
