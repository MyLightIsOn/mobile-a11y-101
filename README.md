# Mobile Mystery House — Mobile Screen Reader Training Game

Mobile Mystery House is a small game designed to teach core mobile screen reader skills (VoiceOver on iOS, TalkBack on Android) through short lessons and accessible puzzles. Players practice essential gestures and navigation patterns, then use those skills to solve a series of themed challenges.

This project is built with Next.js (App Router) and Tailwind CSS.

## Contents
- What is this game?
- How to play
- Project structure
- Lessons and puzzles overview
- Accessibility notes
- Contributing and feedback
- License

## What is this game?
The goal is to introduce mobile screen reader usage in a fun, low-pressure way. The experience includes:
- A Getting Started page with basic instructions
- A Practice area with short lessons on common gestures and navigation
- A set of puzzles that can be solved using only screen reader interactions

The game emphasizes “don’t trust your eyes” — many instructions are provided to screen readers only.

## How to play
1. Use a mobile device with a screen reader enabled (recommended):
   - iOS: VoiceOver
   - Android: TalkBack
2. Open the Getting Started page at /getting-started on your device and read the instructions.
3. Visit the Practice Playground at /lessons to learn or refresh key gestures.
4. Enter the Mystery House at /start and choose a puzzle card to begin.
5. On each puzzle page, swipe and navigate with your screen reader to find hidden instructions and clues. Visual hints are limited by design.
6. If you get stuck, follow the on-screen hint mechanism described in /getting-started.

Tip: Always try swiping through the page linearly first, then use rotor/reading controls (iOS) or TalkBack navigation to jump by element types (headings, links, controls, etc.).

## Project structure
High-level directories you may care about:
- app/getting-started — How-to-play instructions and hints
- app/lessons — Practice Playground starter page and individual lessons
- app/puzzle — Puzzle pages (1–6)
- app/start — Entry to the puzzle “card” grid
- app/feedback — Feedback survey page
- app/api/completion — Optional completion logging API route (uses BACKEND_URL)
- components — Reusable UI and game components
- lib — Utility code (e.g., client to send completion logs)

## Lessons and puzzles overview
Lessons
- Introduce fundamentals like turning on the screen reader, swiping to move by elements, using rotor/reading controls, activating elements, and navigating structured content like tables.
- Start at /lessons and work through Lesson 1 → 5. Lessons are intentionally short—explore each page with your screen reader.

Puzzles
- Access from /start. Choose any card to begin.
- Each puzzle can be completed using the skills from the lessons. Many instructions are only exposed to assistive tech—make sure to swipe through and try different navigation modes.
- Progress is tracked locally (localStorage). Some UI may unlock as you complete puzzles.

## Accessibility notes
- The game is intentionally designed so that critical information appears only to screen readers to encourage non-visual exploration.
- Test on real hardware with VoiceOver or TalkBack when possible. Desktop screen readers won’t represent mobile gesture behavior.
- Use rotor/reading controls (iOS) or TalkBack granularity controls to jump by headings, links, controls, and other element types.

## License
This project is provided as-is for educational purposes. See the repository for license details or include one if missing.
