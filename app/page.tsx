'use client'
import Canvas from "@/components/Canvas";

export default function Home() {
  function onClickPlay(_event: unknown): void {
    dispatchEvent(new Event('newGame'));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-950">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-white">Snake</h1>
        <Canvas />
        <button onClick={onClickPlay}>New Game</button>
        <span id="scoreSpan">Score: 0</span>
      </div>
    </main>
  );
}
