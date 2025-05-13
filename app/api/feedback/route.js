import { NextResponse } from "next/server";

export async function POST(request) {
  const api_url = process.env.BACKEND_URL;
  const { experience, learned, favorite, moreGames, session_id } =
    await request.json();

  try {
    if (!experience || !learned || !favorite || !moreGames) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch(`${api_url}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        experience,
        learned,
        favorite,
        moreGames,
        session_id,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 500 });
    }

    return NextResponse.json({ status: "success" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
