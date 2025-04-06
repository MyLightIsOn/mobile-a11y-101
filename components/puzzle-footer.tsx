import React, { ReactNode } from "react";
import GhostHelper from "@/components/ghost-helper";

interface Props {
  dialogContent: {
    title: string;
    description: ReactNode;
  };
  url?: string;
}

function PuzzleFooter({ dialogContent, url }: Props) {
  return (
    <>
      <div className={"fixed bottom-0 right-0 z-20"}>
        <GhostHelper dialogContent={dialogContent} />
      </div>
      {url && (
        <div className={"fixed bottom-10 left-5"}>
          <a
            className={
              "text-white focus:underline hover:underline p-4 focus:outline-dashed focus:outline-3 outline-white"
            }
            href={url}
          >
            <i className="arrow arrow-left text-white"></i> Back
          </a>
        </div>
      )}
    </>
  );
}

export default PuzzleFooter;
