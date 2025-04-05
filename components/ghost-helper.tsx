import React from "react";

function GhostHelper() {
  return (
    <button className={"ghost-helper"}>
      <div className="ghost-background"></div>
      <div id="ghost-container">
        <div id="spooky">
          <div id="body">
            <div id="eyes"></div>
            <div id="mouth"></div>
            <div id="feet">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div id="shadow"></div>
      </div>
    </button>
  );
}

export default GhostHelper;
