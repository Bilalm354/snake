export function drawBlockInXYPosition(ctx: any, x: number, y: number, colour: string, lengthOfBlockEdge: number) {
    ctx.fillStyle = colour;
    ctx.fillRect((x * lengthOfBlockEdge) - lengthOfBlockEdge, (y * lengthOfBlockEdge - lengthOfBlockEdge), lengthOfBlockEdge, lengthOfBlockEdge);
}
