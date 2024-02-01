export function drawBlockInXYPosition(ctx: any, x: number, y: number, colour: string, lengthOfBlockEdge: number) {
    const xPixelsStart = x * lengthOfBlockEdge - lengthOfBlockEdge;
    const yPixelsStart = y * lengthOfBlockEdge - lengthOfBlockEdge;
    ctx.fillStyle = colour;
    ctx.fillRect(xPixelsStart, yPixelsStart, lengthOfBlockEdge, lengthOfBlockEdge);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.rect(xPixelsStart, yPixelsStart, lengthOfBlockEdge, lengthOfBlockEdge);
    ctx.stroke();
}
