import { logPuzzleCompletion } from "../../../lib/logger";
import { NextResponse } from "next/server";

export async function POST(request) {
  const api_url = process.env.BACKEND_URL;
  const { sessionId, puzzleId, startTime, endTime, deviceType } =
    await request.json();

  try {
    const logPuzzleCompletionResult = await logPuzzleCompletion({
      sessionId,
      puzzleId,
      startTime,
      endTime,
      deviceType,
      api_url,
    });
    console.log(logPuzzleCompletionResult);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
