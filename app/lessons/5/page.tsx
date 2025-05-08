"use client";

const Page = () => {
  return (
    <div
      className="p-4 min-h-screen"
      style={{
        backgroundImage: "url('/playground.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-center mb-10">Lesson 5: Navigating Tables</h1>

      <div className="text-left bg-black/50 text-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Tables are very common on the internet. Learning how to navigate them
          with a screen reader is very useful.
        </p>
        <p>
          The good news is that it is easy as long as the table is accessible.
        </p>
        <div className="bg-gray-200 text-center text-black p-6 rounded mb-6">
          {/* Video placeholder */}
          <p className="italic">[Video demo coming soon]</p>
        </div>
      </div>

      <div className="flex flex-col px-4 pt-10 max-w-[500px] mx-auto justify-center">
        <a className="bg-white text-center p-3 mb-4" href="/lessons/5/practice">
          Practice
        </a>
        <a className="bg-white text-center p-3 mb-14" href="/lessons/">
          Lessons Homepage
        </a>
      </div>
    </div>
  );
};

export default Page;
