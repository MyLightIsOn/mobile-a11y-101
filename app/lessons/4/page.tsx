"use client";

const Page = () => {
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
      <h1 className="text-center mb-10">Lesson 4: Activating Elements</h1>

      <div className="text-left bg-black/50 text-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Screen readers allow you to interact with buttons, links, and form
          fields. This is also a basic form of navigation with a screen reader.
        </p>
        <p className="mb-4">
          There are some buttons and things in the practice area at the bottom
          of this page. Go give them try.
        </p>
        <h3 className={"font-bold mt-10 mb-4 text-lg text-center"}>
          Activating Elements On A Mobile Screen Reader
        </h3>
        <ul className={"mb-8"}>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 1</span> -{" "}
            <span>Turn on Screen Reader.</span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 2</span> -{" "}
            <span>
              Swipe until you reach an interactive element or tap on a
              interactive element once to jump the focus to that button.
            </span>
          </li>
          <li className={"mb-2"}>
            <span className={"font-bold"}>Step 3</span> -{" "}
            <span>Double Tap to activate the interactive element</span>
          </li>
        </ul>
        <div className="text-center text-black rounded mb-6 mx-auto flex justify-center items-center py-2 flex-col w-full">
          <iframe
            className={"w-full min-h-[300px]"}
            src="https://www.youtube.com/embed/6OU0BCemuIE"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className={"italic text-white"}>
            How To Activate Interactive Elements on a Mobile Screen Reader
          </p>
        </div>
      </div>

      <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center">
        <a className="bg-white text-center p-3 mb-4" href="/lessons/4/practice">
          Practice
        </a>
        <a className="bg-white text-center p-3 mb-14" href="/lessons/">
          Lessons Homepage
        </a>
      </div>
    </div>
  );
};

export default Page;
