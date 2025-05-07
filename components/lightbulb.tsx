"use client";

import { ReactNode, useState } from "react";

function Lightbulb({ children }: { children: ReactNode }) {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-70 ${lightOn ? "hidden" : "block"}`}
      />
      <div
        className={`lightbulb-container ${lightOn ? "" : "off"}`}
        onClick={() => {
          setLightOn(!lightOn);
        }}
      >
        <div className="light">
          <div className="wire"></div>
          <div className="bulb">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`text-white ${lightOn ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
}

export default Lightbulb;
