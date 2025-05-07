"use client";

import React, { useRef } from "react";
import Lightbulb from "@/components/lightbulb";
import "@/app/lightbulb.css";

function Page() {
  const activeElementRef = useRef(null);

  const showAlert = (message) => {
    // Store the currently focused element
    activeElementRef.current = document.activeElement;

    alert(message);

    // Return focus to the element that was active before the alert
    if (activeElementRef.current) {
      activeElementRef.current.focus();
    }
  };

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
        <h1 className={"text-center"}>Activating Elements</h1>
        <div className={"p-8 pb-0"}>
          <p>Turn on your screen reader.</p>
          <h2 className="text-lg font-bold mb-2">Try Pressing This Button</h2>
          <button
            onClick={() =>
              showAlert(
                "This is a button. While some buttons look like links and links look like buttons, they are not the same. Generally, buttons will change something on the page while a link opens an entirely new page. For screen reader users, this distinction is important because it tells them what should happen when they press that button.",
              )
            }
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Activate Me
          </button>

          <h2 className="text-lg font-bold mb-2 mt-10">Now try this link</h2>
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
            Activate Me
          </a>

          <h2 className="text-lg font-bold mb-2 mt-10">Try a Dropdown</h2>
          <label htmlFor="locationSelect">Choose a spooky location:</label>
          <select
            id="locationSelect"
            className="block bg-black text-white border mt-2 px-2 py-1 mx-auto"
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
        </div>
        <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center text-black">
          <a className="bg-white text-center p-3 mb-4" href="/lessons/5">
            Next Lesson
          </a>
          <a className="bg-white text-center p-3 mb-14" href="/lessons/4">
            Back
          </a>
        </div>
      </Lightbulb>
    </div>
  );
}

export default Page;
