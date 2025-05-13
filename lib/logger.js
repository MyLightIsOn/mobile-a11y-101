export async function logPuzzleCompletion({
  sessionId,
  puzzleId,
  startTime,
  endTime,
  deviceType,
  api_url,
}) {
  try {
    const response = await fetch(`${api_url}/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        puzzle_id: puzzleId,
        start_time: startTime,
        end_time: endTime,
        device_type: deviceType,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(response);
      console.error("Failed to log puzzle completion:", data.error);
    } else {
      console.log("Puzzle logged successfully:", data);
    }

    return data;
  } catch (err) {
    console.log(err);
    console.error("Error logging puzzle:", err);
  }
}
