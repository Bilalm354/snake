import Canvas from "@/components/Canvas";
import { MutableRefObject, useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-950">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-white">Snake</h1>
        <Canvas />
        <button>Play</button>
        <span id="scoreSpan">Score: 0</span>
      </div>
    </main>
  );
}
