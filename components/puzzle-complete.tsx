import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Confetti from "@/components/confetti";

interface DialogContentProps {
  dialogContent: {
    puzzleNumber: number;
    description: ReactNode;
  };
  puzzleSolved: boolean;
  buttonText?: string;
  delay?: boolean;
  children?: ReactNode;
}

function PuzzleComplete({
  dialogContent,
  puzzleSolved,
  buttonText,
  delay,
  children,
}: DialogContentProps) {
  return (
    <Dialog open={puzzleSolved}>
      {!delay && (
        <DialogTrigger asChild aria-label={buttonText}>
          {children}
        </DialogTrigger>
      )}
      {delay && children}
      {puzzleSolved && (
        <DialogContent className="sm:max-w-[425px] bg-transparent text-white border-0 [&>button]:hidden">
          <DialogTitle className={"henny-penny-regular !text-2xl text-center"}>
            SUCCESS!
          </DialogTitle>
          <div className={"text-center bg-white text-black rounded-sm p-6"}>
            <p className={"font-bold"}>
              Good job! <br />
              You have solved puzzle #{dialogContent.puzzleNumber}!
            </p>
            {dialogContent.description}
            <a href={"/start"}>Ok</a>
          </div>
        </DialogContent>
      )}
      {puzzleSolved && <Confetti />}
    </Dialog>
  );
}

export default PuzzleComplete;
