import "./mystery-button.css";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/house.webp')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main className="flex flex-col row-start-2 items-center">
        <h1 className={"text-center text-2xl font-bold mb-4"}>
          Mobile Mystery House
        </h1>
        <h2 className={"text-white text-center mb-10"}>
          A Digital Escape Room for Learning Mobile Accessibility
        </h2>
        <a
          href={"/getting-started"}
          className={
            "text-white underline px-10 py-4 border-white border focus:border-dashed hover:border-dashed uppercase"
          }
        >
          Play
        </a>
      </main>
    </div>
  );
}
