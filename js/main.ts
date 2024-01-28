import { Snake } from "./Snake";
import { Direction } from "./enums";

function isTheSamePosition(position1: { x: any; y: any; }, position2: { x: any; y: any; }) {
    return position1.x === position2.x && position1.y === position2.y
}

function generateRandomPosition(max: number) {
    return {
        x: Math.floor((Math.random() * max)) + 1,
        y: Math.floor((Math.random() * max)) + 1
    }
}

class Grid {
    divisions = 5;

    draw(ctx: CanvasRenderingContext2D) {
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

class FoodBlock {
    constructor() {
        this.position = this.getNewPosition()
    }

    getNewPosition = () => {
        return generateRandomPosition(grid.divisions);
    }

    position = this.getNewPosition();
}

const grid = new Grid();
const foodBlock = new FoodBlock();
const snake = new Snake({x:3, y:3});
const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
if(!canvas) {
    throw new Error('Canvas not found')
}
const lengthOfBlockEdge = canvas!.width / grid.divisions;


function main() {
    document.addEventListener('keydown', onKeyDown)
    const ctx = canvas!.getContext("2d");
    if (!ctx) {
        return
    }
    draw(ctx);

    setInterval(() => {
        console.log({ snake })
        updateGame()
        draw(ctx);
    }, 1000)
}

function onKeyDown(event: { key: any; }) {
    console.log(mapKeyToDirection(event.key))
    const newDirection = mapKeyToDirection(event.key)
    if (newDirection) {
        snake.direction = newDirection;
    }
}

function mapKeyToDirection(key: any): Direction | undefined {
    switch (key) {
        case 'ArrowLeft':
            return Direction.LEFT
        case 'ArrowRight':
            return Direction.RIGHT
        case 'ArrowUp':
            return Direction.UP
        case 'ArrowDown':
            return Direction.DOWN
    }
}


function draw(ctx: CanvasRenderingContext2D) {
    drawBackground(ctx);
    grid.draw(ctx);
    drawFoodBlock(ctx);
    drawSnake(ctx);
}

function drawBackground(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.width);
}

function drawSnake(ctx: any) {
    drawBlockInXYPosition(ctx, snake.positions[0].x, snake.positions[0].y, 'green')
}

function drawFoodBlock(ctx: any) {
    drawBlockInXYPosition(ctx, foodBlock.position.x, foodBlock.position.y, 'red')
}

function drawBlockInXYPosition(ctx: { fillStyle: any; fillRect: (arg0: number, arg1: number, arg2: number, arg3: number) => void; }, x: number, y: number, colour: string) {
    ctx.fillStyle = colour;
    ctx.fillRect((x * lengthOfBlockEdge) - lengthOfBlockEdge, (y * lengthOfBlockEdge - lengthOfBlockEdge), lengthOfBlockEdge, lengthOfBlockEdge);
}

function updateGame() {
    
    const areOnTheSamePosition = isTheSamePosition(snake.positions[0], foodBlock.position)
    snake.update(areOnTheSamePosition)
    if (areOnTheSamePosition) {
        foodBlock.position = foodBlock.getNewPosition();
    }
}

main();
