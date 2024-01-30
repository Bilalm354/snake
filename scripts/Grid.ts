class Grid {
    divisions = 5;

    draw(ctx: CanvasRenderingContext2D, lengthOfBlockEdge: number) {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "gray";
        for (let xPosition = 1; xPosition <= this.divisions; xPosition++) {
            for (let yPosition = 1; yPosition <= this.divisions; yPosition++) {
                const startX = (xPosition - 1) * lengthOfBlockEdge;
                const startY = (yPosition - 1) * lengthOfBlockEdge;
                ctx.beginPath();
                ctx.rect(startX, startY, lengthOfBlockEdge, lengthOfBlockEdge);
                ctx.stroke();
            }
        }
    }
}

const grid = new Grid();
export default grid;