import React from "react";
import Parchment from "@/components/parchment";

function Page() {
  return (
    <div>
      <div className={"p-4"}>
        <h1 className={"text-center mb-10"}>Practice</h1>

        <div
          className={
            "text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto"
          }
        >
          <p>Practice</p>
        </div>
      </div>
      <div className={"relative"}>
        <Parchment />
      </div>
    </div>
  );
}

export default Page;
