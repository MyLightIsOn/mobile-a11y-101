"use client";

import React from "react";
import "@/app/mystery-button.css";
import { useRouter } from "next/navigation";

function PuzzleLink({ number }: { number: number }) {
  const router = useRouter();

  return (
    <div className={"flex items-center justify-center"}>
      <button
        aria-label={`To Puzzle ${number + 1}`}
        role={"link"}
        className="mystery-button text-md"
        onClick={() => router.push(`/puzzle/${number + 1}`)}
      >
        {number + 1}
      </button>
    </div>
  );
}

export default PuzzleLink;
