"use client";
import React, { useEffect, useState } from "react";
import PuzzleFooter from "@/components/puzzle-footer";
import PuzzleComplete from "@/components/puzzle-complete";
import { CircleCheck } from "lucide-react";
import puzzleComplete from "@/lib/puzzleComplete";

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
      "Once upon a time, there was a curious soul who discovered an old mysterious house. They could not resist the lure of learning something new. They cautiously entered. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-2",
    title: "Chapter 2",
    content:
      "When they entered, the house was drenched in silence. However, they heard sound from somewhere below. The basement perhaps? They unlocked the door and descended. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-3",
    title: "Chapter 3",
    content:
      "The basement was pitch black and our curious soul could see nothing. That did not matter because our curious soul was also prepared and practice navigating without light. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-4",
    title: "Chapter 4",
    content:
      "Next they wandered into the living room. There was an odd looking coffee table covered with buttons. They all said click here, but it was a trap. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-5",
    title: "Chapter 5",
    content:
      "This strange house also had an old art gallery with creepy portraits that seemed to be watching. Oddly, there seemed to be a locked door near the portrait of the dog. With no key, our adventurer moved on to the dining room. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-6",
    title: "Chapter 6",
    content:
      "The dining room was set as if a big feast would be served at some unknown date. One setting was for an honored guest. 'I wonder who this guest was?', the adventurer thought as they stepped into the hall and walked towards the study. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-7",
    title: "Chapter 7",
    content:
      "The study room was set as if a big feast would be served at some unknown date. One setting was for an honored guest. 'I wonder who this guest was?', the adventurer thought as they stepped into the hall and walked towards the study. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-8",
    title: "Chapter 8",
    content:
      "The study was old and dusty, yet the fireplace blazed, bathing the room with dancing shadows. The adventurer checked every drawer looking for clues. Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-9",
    title: "Chapter 9",
    content:
      "Lastly, our explorer found a massive library with rows and rows of books that stretched on forever. In the middle, an ancient book with blank pages rested on a pedestal. What secrets does it hide? Double tap to mark this chapter as red.",
  },
  {
    id: "chapter-10",
    title: "Chapter 10",
    content:
      "As our hero departs the mysterious house, they realize that wihtout being able to understand with their ears, they would be lost forever. The end. Double tap to mark this chapter as red.",
  },
];

function Page() {
  const [chaptersRead, setChaptersRead] = useState<string[]>([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const markedRead = (chapterId: string) => {
    setChaptersRead([...chaptersRead, chapterId]);
  };

  const chaptersToCheck = ["chapter-2", "chapter-5", "chapter-9"];

  useEffect(() => {
    const checkIfAllPresent = chaptersToCheck.every((chapter) =>
      chaptersRead.includes(chapter),
    );
    if (checkIfAllPresent) {
      setPuzzleSolved(true);
      puzzleComplete("puzzle_6", startTime, elapsedTime.toString());
    }
  }, [chaptersRead]);

  useEffect(() => {
    const newStartTime = new Date();
    setStartTime(newStartTime);

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
      <p className={"sr-only -top-96 -left-96 overflow-hidden"}>
        Shelves tower above you, heavy with dusty volumes of forgotten
        knowledge. A cold draft rustles their spines. At the center of the room,
        a single book rests open. Its pages blank. In chapters 2, 5, and 9 you
        see bookmarks. What could this mean? This is your final test. You
        already know everything you need to solve this puzzle. Good luck.
      </p>
      <div>
        <div className={"mb-4"}> Table of Contents:</div>
        <div
          className={"flex flex-wrap justify-center w-[250px] mx-auto gap-2"}
        >
          {chapters.map((chapter, index) => (
            <ul key={chapter.id} id={"table-contents"}>
              {chaptersRead.includes(chapter.id) ? (
                <li className={"w-10 rounded-full bg-green-700"}>
                  <CircleCheck className={"w-full h-full "} />
                </li>
              ) : (
                <li
                  aria-label={`Turn to Chapter ${index + 1}`}
                  className={
                    "border border-white border-3 rounded-full flex justify-center items-center w-10 h-10"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(chapter.id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      el.setAttribute("tabindex", "-1");
                      el.focus();
                    }
                  }}
                >
                  {index + 1}
                </li>
              )}
            </ul>
          ))}
        </div>
      </div>
      <div className={"sr-only absolute -top-96 -left-96 overflow-hidden"}>
        {chapters.map((chapter, index) => (
          <div key={index}>
            <a
              href={"#table-contents"}
              id={chapter.id}
              onClick={() => {
                markedRead(chapter.id);
                const table_of_contents =
                  document.getElementById("table-contents");
                table_of_contents?.focus();
              }}
            >
              {"You turn to" + chapter.title + ". " + chapter.content}
            </a>
            <a href={"#table-contents"}>Back to Table of Contents</a>
          </div>
        ))}
      </div>
      <PuzzleComplete
        dialogContent={puzzleSolvedContent}
        puzzleSolved={puzzleSolved}
      />
      <PuzzleFooter url={"/start"} />
    </div>
  );
}

export default Page;
