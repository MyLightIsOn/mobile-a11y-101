import React from "react";
import Lightbulb from "@/components/lightbulb";
import "@/app/lightbulb.css";

function Page() {
  return (
    <div
      className={"bg-black text-center h-screen overflow-hidden"}
      style={{
        backgroundImage: "url('/shed.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Lightbulb />
      Practice
    </div>
  );
}

export default Page;
