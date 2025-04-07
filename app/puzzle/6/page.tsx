import React from "react";
import PuzzleFooter from "@/components/puzzle-footer";

const dialogContent = {
  title: "Hint",
  description: (
    <div className={"text-sm text-left mt-6"}>
      <p>Search the book by its chapters—one of them speaks in riddles</p>
    </div>
  ),
};

function Page() {
  return (
    <div className="bg-black text-center text-white p-4 min-h-screen w-screen relative">
      <div
        className={"absolute h-screen w-screen top-0 left-0 opacity-60"}
        style={{
          backgroundImage: `url('/old_book.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      <h1 className="text-2xl font-bold pb-2 relative z-10">Puzzle 6:</h1>
      <h2 className="text-xl pb-6 relative z-10">The Blank Tome</h2>

      <main className="sr-only" role="main">
        <p>
          The Silent Tome lies open. Its secrets are bound in chapters few can
          read.
        </p>
      </main>

      {Array.from({ length: 10 }).map((_, index) => {
        const chapterNum = index + 1;
        const isClueChapter = chapterNum === 8;

        return (
          <section
            key={chapterNum}
            className="sr-only"
            role="region"
            aria-label={`Chapter ${chapterNum}`}
          >
            {isClueChapter ? (
              <p>
                Riddle: I help describe, but I am not seen.
                <br />
                I give context without being mean.
                <br />
                The answer is: <strong>aria-label</strong>
              </p>
            ) : (
              <p>
                {
                  [
                    "You flip the page and only cobwebs remain.",
                    "A poem about a haunted sandwich. Not helpful.",
                    "A ghost tells a pun, but forgets the punchline.",
                    "These words rearrange themselves into nothing.",
                    "It’s just an inventory of spoons.",
                    "A list of rules, all crossed out.",
                    "You find a warning in Latin. Spooky... but irrelevant.",
                    "Blank, except for a tea stain shaped like a duck.",
                    "A riddle that loops back to this chapter.",
                  ][index % 9]
                }
              </p>
            )}
          </section>
        );
      })}
      <PuzzleFooter dialogContent={dialogContent} url={"/start"} />
    </div>
  );
}

export default Page;
