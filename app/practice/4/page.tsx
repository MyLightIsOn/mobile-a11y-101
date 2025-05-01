"use client";
import React, { useRef } from "react";

const Page = () => {
  const activeElementRef = useRef<HTMLElement | null>(null);

  const showAlert = (message: string) => {
    // Store the currently focused element
    activeElementRef.current = document.activeElement as HTMLElement;

    alert(message);

    // Return focus to the element that was active before the alert
    if (activeElementRef.current) {
      activeElementRef.current.focus();
    }
  };

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

      <div className="text-white p-4 pt-10 max-w-[500px] mx-auto space-y-6">
        <section aria-label="Button Section">
          <h2 className="text-lg font-bold mb-2">Try Pressing This Button</h2>
          <button
            onClick={() =>
              showAlert(
                "This is a button. While some buttons look like links and links look like buttons, they are not the same. Generally, buttons will change something on the page—a link opens a new page. For screen reader users, this distinction is important because it tells them what should happen when they press that button.",
              )
            }
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tap Me
          </button>
        </section>

        <section aria-label="Link Section">
          <h2 className="text-lg font-bold mb-2 mt-10">
            Find and Follow This Link
          </h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showAlert(
                "This is a link. Links are used to move to other pages or sections. Screen readers announce them as links, and users expect navigation—not in-page actions.",
              );
            }}
            className="underline text-blue-300"
          >
            Mysterious Link
          </a>
        </section>

        <section aria-label="Dropdown Section">
          <h2 className="text-lg font-bold mb-2 mt-10">Try a Dropdown</h2>
          <label htmlFor="locationSelect">Choose a spooky location:</label>
          <select
            id="locationSelect"
            className="block bg-black text-white border mt-2 px-2 py-1"
            onChange={() =>
              showAlert(
                "This is a dropdown (select menu). It lets screen reader users choose one item from a list.",
              )
            }
          >
            <option>Attic</option>
            <option>Cellar</option>
            <option>Foyer</option>
            <option>Secret Passage</option>
          </select>
        </section>

        <section aria-label="Radio Buttons">
          <h2 className="text-lg font-bold mb-2 mt-10">Choose One</h2>
          <fieldset>
            <legend>Pick your favorite haunted object:</legend>
            <label>
              <input
                type="radio"
                name="object"
                value="mirror"
                className="mr-2"
                onClick={() =>
                  showAlert(
                    "These are radio buttons. Screen reader users can use them to choose one option from a group.",
                  )
                }
              />
              Haunted Mirror
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="object"
                value="doll"
                className="mr-2"
                onClick={() =>
                  showAlert(
                    "These are radio buttons. Screen reader users can use them to choose one option from a group.",
                  )
                }
              />
              Cursed Doll
            </label>
          </fieldset>
        </section>

        <section aria-label="Checkbox Practice">
          <h2 className="text-lg font-bold mb-2 mt-10">Check This Box</h2>
          <label>
            <input
              type="checkbox"
              className="mr-2"
              onClick={() =>
                showAlert(
                  "This is a checkbox. Screen reader users can toggle this on or off. They’re often used for agreeing to terms or selecting multiple options.",
                )
              }
            />
            I agree not to awaken any spirits
          </label>
        </section>
      </div>

      <div className="flex flex-col pt-10 max-w-[500px] mx-auto">
        <a className="bg-white text-center p-3 mb-8" href="/practice/">
          Lesson Homepage
        </a>
      </div>
    </div>
  );
};

export default Page;
