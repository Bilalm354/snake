'use client';
import { main } from "@/scripts/main";
import { MutableRefObject, useRef, useEffect } from "react";

export default function Canvas() {
    const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null)
    let canvas = null;
    useEffect(() => {
        console.log('useEffect')
        canvas = canvasRef.current
        if (!canvas) return

        main(canvas);
    }, [])
    return (
        <canvas ref={canvasRef} width="1000" height="1000">
            An alternative text describing what your canvas displays.
        </canvas>
    );
}