import React from "react";

function Page() {
  return (
    <div className="p-4">
      <h1 className={"text-center mb-10"}>Lesson 1: Swiping</h1>

      <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Swiping right with one finger will move forward through items on the
          screen. Swiping left moves backward. This is how you explore the page
          element by element using a screen reader.
        </p>
        <div className="text-center text-black rounded mb-6">
          <iframe
            src="https://www.youtube.com/embed/6_yTFl05KMg"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        Turn on your screen reader now and practice swiping left and right on
        the text below. Notice how its reading line by line.
      </div>

      <div className={"text-white p-4 pt-10 practice-section"}>
        <p>Welcome to the Mobile Mystery House.</p>
        <p>Each room is filled with secrets you can only find by listening.</p>
        <p>
          You'll explore by swiping left and right to hear everything that's
          hidden.
        </p>
        <p>
          Sometimes clues will be announced in headings, buttons, or form
          fields.
        </p>
        <p>Use your screen reader and swipe carefully.</p>
        <p>
          If you got here, you're doing great. When you're ready, move on to the
          next lesson.
        </p>
      </div>

      <div className="flex flex-col pt-10">
        <a className="bg-white text-center p-3 mb-8" href="/practice/">
          Back
        </a>
      </div>
    </div>
  );
}

export default Page;
