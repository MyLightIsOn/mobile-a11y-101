"use client";

import { useState, useEffect } from "react";

const rating = [
  "The game did not help at all", // 0
  "The game helped a little", // 1
  "The game helped somewhat", // 2
  "The game helped quite a bit", // 3
  "The game helped a lot", // 4
  "The game helped a great deal", // 5
];

const FeedbackForm = () => {
  const [form, setForm] = useState({
    experience: "",
    learned: "",
    favorite: "",
    moreGames: "",
    session_id:
      typeof window !== "undefined" ? localStorage.getItem("session_id") : "",
  });

  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("session_id");
    if (session) {
      setForm((prev) => ({ ...prev, session_id: session }));
    }
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Feedback submission failed.");
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  if (submitted) {
    return (
      <div
        className={
          "bg-white h-screen flex flex-col items-center justify-center"
        }
      >
        <p className="text-center">Thank you for your feedback!</p>{" "}
        <a
          href={"/"}
          className="underline px-4 py-2 w-1/2 text-center border border-black rounded"
        >
          Back
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded max-w-xl mx-auto space-y-6 min-h-screen pb-20"
    >
      <h2 className="text-2xl font-bold text-center">Feedback Survey</h2>

      <div className={"border border-gray-400 rounded-md p-4"}>
        <label className="block mb-1 font-bold pb-4">
          1. What was your mobile accessibility experience prior to playing this
          game?
        </label>
        <select
          name="experience"
          onChange={handleChange}
          value={form.experience}
          required
          className="w-full p-2 border"
        >
          <option value="">Select one</option>
          <option value="None">No experience</option>
          <option value="Some">Some experience</option>
          <option value="A lot">A lot of experience</option>
        </select>
      </div>

      <div className={"border border-gray-400 rounded-md p-4"}>
        <label className="block mb-1 font-bold pb-4">
          2. Do you feel that this game helped you learn about mobile
          accessibility?
        </label>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="learned"
                value={num}
                onChange={handleChange}
                required
                className="mr-1"
              />
              {rating[num]}
            </label>
          ))}
        </div>
      </div>

      <div className={"border border-gray-400 rounded-md p-4"}>
        <label className="block mb-1 font-bold pb-4">
          3. Which was your favorite puzzle?
        </label>
        <select
          name="favorite"
          onChange={handleChange}
          value={form.favorite}
          required
          className="w-full p-2 border"
        >
          <option value="">Select one</option>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={`Puzzle ${n}`}>
              Puzzle {n}
            </option>
          ))}
        </select>
      </div>

      <div className={"border border-gray-400 rounded-md p-4"}>
        <label className="block mb-1 font-bold pb-4">
          4. Would you be interested in more accessibility games?
        </label>
        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              name="moreGames"
              value="Yes"
              onChange={handleChange}
              required
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="moreGames"
              value="No"
              onChange={handleChange}
              className="mr-1"
            />
            No
          </label>
        </div>
      </div>

      <div className={"flex justify-between gap-4"}>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 w-1/2"
        >
          Submit Feedback
        </button>
        <a
          href={"/"}
          className="underline px-4 py-2 w-1/2 text-center border border-black rounded"
        >
          Back
        </a>
      </div>
    </form>
  );
};

export default FeedbackForm;
