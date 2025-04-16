"use client";

import React, { useEffect } from "react";
import "@/app/parchment.css";

function Parchment() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // First call to define "parchment" height
      // @ts-ignore
      window.onload = ScrollHeight();

      // Redraw when viewport is modified
      window.addEventListener("resize", function () {
        ScrollHeight();
      });

      function ScrollHeight(): void {
        const content = document.querySelector<HTMLDivElement>("#parchment");
        const container = document.querySelector<HTMLDivElement>("#contain");

        // SVG feTurbulence can modify all others elements, for this reason "parchment" is in another <div> and in absolute position.
        // so for a better effect, absolute height is defined by his content.
        if (content && container)
          content.style.height = `${container.offsetHeight}px`;
      }
    }
  }, []);

  return (
    <div id={"parchment-bg"}>
      <div className={"sheet-container"}>
        <div id="parchment"></div>
      </div>
      <div id="contain">
        <h2 className="inkTitle pt-20 pb-10">To the One Who Dares Enter</h2>
        {/* <p id="labarum">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chi_Rho.svg/1200px-Chi_Rho.svg.png" />
        </p>*/}
        <section id={"first-section"}>
          <p className={"letter-text"}>
            I once roamed these halls freely, until something precious to me
            vanished within its walls. It is a treasure not of gold, but of
            great value nonetheless. I’ve searched every room—yet it continues
            to elude me.
          </p>
          <p className={"letter-text"}>
            If you are clever, brave, and able to listen beyond what eyes can
            see, you may find it. And if you do… it is yours to keep.
          </p>
        </section>

        <section>
          <p className={"letter-text"}>
            To begin your search, you must master these methods:
          </p>
          <ul className="list-disc list-inside letter-list">
            <li>Swipe left and right to explore each detail</li>
            <li>Look for headings to guide your path</li>
            <li>Examine all parts of a page, not just the top</li>
          </ul>
          <p className={"letter-text"}>
            Ignore the silence. Let your screen reader be your lantern.
          </p>
        </section>

        <section className="mt-6">
          <p className="cachet">
            <img src="https://i.postimg.cc/4NBYNqCR/22.png" />
          </p>
          <div id="signature">
            Imperator Caesar Flavius Constantinus
            <br />
            Pius Felix Invictus Augustus
          </div>
        </section>
      </div>

      <svg>
        <filter id="wavy2">
          {/*<feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />*/}
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </svg>
    </div>
  );
}

export default Parchment;
