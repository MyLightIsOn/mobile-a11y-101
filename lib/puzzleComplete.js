export default async function puzzleComplete(puzzle, startTime, elapsedTime) {
  if (!localStorage.getItem("session_id")) {
    localStorage.setItem("session_id", crypto.randomUUID());
  }
  const endTime = new Date();
  const sessionId = localStorage.getItem("session_id");
  const puzzleId = puzzle;
  const deviceType = getDeviceType();
  localStorage.setItem(`${puzzleId}_time`, elapsedTime.toString());
  localStorage.setItem(`${puzzleId}_complete`, "true");
  console.log({
    sessionId,
    puzzleId,
    startTime,
    endTime,
    deviceType,
  });
  const res = await fetch("/api/completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionId,
      puzzleId,
      startTime,
      endTime,
      deviceType,
    }),
  });

  return await res.json();
}

function getDeviceType() {
  var ua = navigator.userAgent;
  if (/(android)/i.test(ua)) return "Android";
  if (/iPad/i.test(ua)) return "iPad";
  if (/iPhone|iPod/i.test(ua)) return "iOS";
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua))
    return "mobile";
  return "desktop";
}
