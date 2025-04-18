import React from "react";

function Page() {
  return (
    <div className="p-4">
      <h1 className="text-center mb-10">Lesson 2: Rotor / Menu Navigation</h1>

      <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          The Rotor (on iOS) or Reader Menu (on Android) helps you jump through
          content by type—like headings, links, lists, and more.
        </p>
        <div className="text-center text-black rounded mb-6">
          <iframe
            src="https://www.youtube.com/embed/qVSb2ydXweI"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        Turn on your screen reader and use the rotor or menu to browse this page
        by content type. Try jumping to each heading, then the list, and then
        explore the different sections.
      </div>

      <main className="text-white p-4 pt-10 practice-section" role="main">
        <section aria-label="Intro Section">
          <h2>Welcome to the Rotor Practice</h2>
          <p>
            You are learning to move through pages more efficiently by jumping
            between types of content.
          </p>
        </section>

        <section aria-label="Clue Types">
          <h2>Common Things to Look For</h2>
          <ul className="list-disc list-inside">
            <li>Headings – great for structure</li>
            <li>Links – used for navigation</li>
            <li>Form Fields – inputs, buttons, toggles</li>
            <li>Tables – to compare data or info</li>
          </ul>
        </section>

        <section aria-label="Navigation Tip">
          <h2>Navigation Tips</h2>
          <p>
            In the real puzzles, you might want to jump directly to headings to
            get a sense of the page layout before swiping element-by-element.
          </p>
          <p>
            If you're on iOS, twist two fingers on the screen like you're
            turning a dial to open the rotor.
          </p>
          <p>
            On Android, swipe up or down with three fingers to cycle between
            navigation modes.
          </p>
        </section>

        <nav aria-label="Helpful Links">
          <h2>Useful Links</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="#" className="underline text-blue-300">
                Link Example 1
              </a>
            </li>
            <li>
              <a href="#" className="underline text-blue-300">
                Link Example 2
              </a>
            </li>
            <li>
              <a href="#" className="underline text-blue-300">
                Link Example 3
              </a>
            </li>
          </ul>
        </nav>

        <footer role="contentinfo">
          <p className="mt-8 text-sm text-gray-400">
            You’ve reached the end of this practice page. If you got here using
            the rotor or menu, well done!
          </p>
        </footer>
      </main>

      <div className="flex flex-col pt-10">
        <a className="bg-white text-center p-3 mb-8" href="/practice/">
          Back
        </a>
      </div>
    </div>
  );
}

export default Page;
