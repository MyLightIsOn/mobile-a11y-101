export async function logPuzzleCompletion({
  sessionId,
  puzzleId,
  startTime,
  endTime,
}) {
  try {
    const response = await fetch("http://localhost:5000/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        puzzle_id: puzzleId,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
        device_type: getDeviceType(),
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

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "mobile";
  if (/iPad|Tablet/i.test(ua)) return "tablet";
  return "desktop";
}
