"use client";

import { useState, useEffect } from "react";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    experience: "",
    learned: "",
    favorite: "",
    moreGames: "",
    session_id:
      typeof window !== "undefined" ? localStorage.getItem("session_id") : "",
  });

  const [submitted, setSubmitted] = useState(false);

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
      <p className="text-center text-green-500">Thank you for your feedback!</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded max-w-xl mx-auto space-y-6 h-screen"
    >
      <h2 className="text-2xl font-bold text-center">Feedback Survey</h2>

      <div>
        <label className="block mb-1 font-medium">
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

      <div>
        <label className="block mb-1 font-medium">
          2. Do you feel that this game helped you learn mobile accessibility?
        </label>
        <div className="flex gap-4">
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
              {num}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">
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

      <div>
        <label className="block mb-1 font-medium">
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

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
