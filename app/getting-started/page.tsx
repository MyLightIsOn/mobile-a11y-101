import React from "react";

function Page() {
  return (
    <div>
      Getting Started
      <a
        href={"/start-page"}
        className={
          "bg-black dark:bg-white dark:text-black px-10 py-2 rounded-full"
        }
      >
        Start
      </a>
    </div>
  );
}

export default Page;
