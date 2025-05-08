"use client";

import React from "react";
import Lightbulb from "@/components/lightbulb";
import "@/app/lightbulb.css";

function Page() {
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
        <h1 className={"text-center"}>Navigating Tables</h1>
        <div className={"p-8 pb-0"}>
          <p>
            Turn on your screen reader and swipe until you reach the table
            cells. Swipe through all of them and listen carefully to hear how
            the screen reader describes your location within the table.
          </p>
          <div className="text-white p-4 pt-10 max-w-[500px] mx-auto">
            <table
              title="Practice table"
              className="w-full border border-white"
              role="table"
            >
              <thead>
                <tr>
                  <th className="border p-2">left side of the table</th>
                  <th className="border p-2">middle of the table</th>
                  <th className="border p-2">right side of table</th>
                </tr>
              </thead>
              <tbody>
                <tr className={"text-center"}>
                  <td className="border p-2">Top row</td>
                  <td className="border p-2">Top row</td>
                  <td className="border p-2">Top row</td>
                </tr>
                <tr className={"text-center"}>
                  <td className="border p-2">Middle row</td>
                  <td className="border p-2">Middle row</td>
                  <td className="border p-2">Middle row</td>
                </tr>
                <tr className={"text-center"}>
                  <td className="border p-2">Bottom row</td>
                  <td className="border p-2">Bottom row</td>
                  <td className="border p-2">Bottom row</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center text-black">
          <a className="bg-white text-center p-3 mb-4" href="/lessons/">
            Lessons Homepage
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
