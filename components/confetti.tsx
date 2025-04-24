import React from "react";
import Confetti from "react-confetti-boom";

function ConfettiComponent() {
  return (
    <div
      className={"absolute w-screen h-screen top-0 left-0"}
      style={{ zIndex: 51 }}
    >
      <Confetti
        mode={"fall"}
        fadeOutHeight={1}
        shapeSize={20}
        particleCount={1}
        colors={["#478a4e", "#f61515", "#ffbb00", "#0756ac"]}
      />
    </div>
  );
}

export default ConfettiComponent;
