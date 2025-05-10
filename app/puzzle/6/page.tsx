"use client";
import React, { useEffect, useState } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleCompleteButton from "@/components/puzzle-complete-button";

const puzzleSolvedContent = {
  puzzleNumber: 6,
  description: (
    <p className={"text-left"}>
      Congratulations! you have solved all of the puzzles.
    </p>
  ),
};

const chapters = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    content:
      "Once upon a time, there was a curious soul who discovered an old mysterious house. They could not resist the lure of learning something new. They cautiously entered.",
  },
  {
    id: "chapter-2",
    title: "Chapter 2",
    content:
      "When they entered, the house was drenched in silence. However, they heard sound from somewhere below. The basement perhaps? They unlocked the door and descended.",
  },
  {
    id: "chapter-3",
    title: "Chapter 3",
    content:
      "The basement was pitch black and our curious soul could see nothing. That did not matter because our curious soul was also prepared and practice navigating without light.",
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    content:
      "Next they wandered into the living room. There was an odd looking coffee table covered with buttons. They all said click here, but it was trap.",
  },
  {
    id: "chapter-5",
    title: "Chapter 5",
    content:
      "This strange house also had an old art gallery with creepy portraits that seemed to watching. Oddly, there seemed to be a locked door near the portrait of the dog. With no key, our adventurer moved on to the dining room.",
  },
  {
    id: "chapter-6",
    title: "Chapter 6",
    content:
      "The dining room was set as if a big feast would be served at some unknown date. One setting was for an honored guest. 'I wonder who this guest was?', the adventurer thought as they stepped into the hall and walked towards the study.",
  },
  {
    id: "chapter-7",
    title: "Chapter 7",
    content:
      "The study room was set as if a big feast would be served at some unknown date. One setting was for an honored guest. 'I wonder who this guest was?', the adventurer thought as they stepped into the hall and walked towards the study.",
  },
  {
    id: "chapter-8",
    title: "Chapter 8",
    content:
      "The study was old and dusty, yet the fireplace blazed, bathing the room with dancing shadows. The adventurer checked every drawer looking for clues.",
  },
  {
    id: "chapter-9",
    title: "Chapter 9",
    content:
      "Lastly, our explorer found a massive library with rows and rows of books that stretched on forever. In the middle, an ancient book with blank pages rested on a pedestal. What secrets does it hide?",
  },
  {
    id: "chapter-10",
    title: "Chapter 10",
    content:
      "As our hero departs the mysterious house, they realize that wihtout being able to understand with their ears, they would be lost forever. The end.",
  },
];

function Page() {
  const [chaptersRead, setChaptersRead] = useState<string[]>([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const markedRead = (chapterId: string) => {
    setChaptersRead([...chaptersRead, chapterId]);
  };

  const chaptersToCheck = ["chapter-1"];

  useEffect(() => {
    const checkIfAllPresent = chaptersToCheck.every((chapter) =>
      chaptersRead.includes(chapter),
    );
    if (checkIfAllPresent) {
      setPuzzleSolved(true);
      localStorage.setItem("puzzle_6_time", elapsedTime.toString());
      localStorage.setItem("puzzle_6_complete", "true");
    }
  }, [chaptersRead]);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="bg-black min-h-screen w-screen text-white text-center p-4"
      style={{
        backgroundImage: "url('/library.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-2xl font-bold pb-2 relative z-10">Puzzle 6:</h1>
      <h2 className="text-xl pb-6 relative z-10 text-white">The Blank Tome</h2>
      <div className={"sr-only absolute -left-96 -top-96"}>
        <ul id={"table-contents"}>
          {chapters.map((chapter, index) => (
            <li key={index}>
              <a href={`#${chapter.id}`}>{chapter.title}</a>
            </li>
          ))}
        </ul>
        {chapters.map((chapter, index) => (
          <div id={chapter.id} key={index}>
            <h3>{chapter.title}</h3>
            <p>{chapter.content} </p>
            <button onClick={() => markedRead(chapter.id)}>
              Mark {chapter.title} As Read
            </button>
            <a href={"#table-contents"}>Back to Table of Contents</a>
          </div>
        ))}
      </div>
      <PuzzleCompleteButton
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
      />
      <PuzzleFooter url={"/start"} />
    </div>
  );
}

export default Page;
