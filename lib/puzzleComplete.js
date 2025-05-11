import { logPuzzleCompletion } from "@/lib/logger";

export default function puzzleComplete(puzzle, startTime, elapsedTime) {
  if (!localStorage.getItem("session_id")) {
    localStorage.setItem("session_id", crypto.randomUUID());
  }

  const endTime = new Date();
  const sessionId = localStorage.getItem("session_id");
  const puzzleId = puzzle;

  localStorage.setItem(`${puzzleId}_time`, elapsedTime.toString());
  localStorage.setItem(`${puzzleId}_complete`, "true");

  return logPuzzleCompletion({ sessionId, puzzleId, startTime, endTime });
}
