import { FoodBlock } from "./FoodBlock";
import grid from "./Grid";
import { Position } from "./Position";
import Snake from "./Snake";
import { Direction } from "./enums";

function main() {
    const foodBlock = new FoodBlock();
    const snake = new Snake(new Position(3, 3));
    const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
    if(!canvas) {
        throw new Error('Canvas not found')
    }
    const lengthOfBlockEdge = canvas!.width / grid.divisions;
    document.addEventListener('keydown', onKeyDown)
    const ctx = canvas!.getContext("2d");
    if (!ctx) {
        return
    }
    drawEverything(ctx);

    const interval = setInterval((): void => {
        if (snake.isDead) {
            alert('Game Over!');
            clearInterval(interval)
            return 
        } else {
            updateGame()
        }
        drawEverything(ctx);
    }, 1000)

    function drawEverything(ctx: CanvasRenderingContext2D) {
        drawBackground(ctx);
        for (const x of [grid, foodBlock, snake]) {
            x.draw(ctx, lengthOfBlockEdge);
        }
    }
    
    function drawBackground(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.width);
    }
    
    function updateGame() {
        const areOnTheSamePosition = Position.areTheSamePosition(snake.positions[0], foodBlock.position)
        snake.update(areOnTheSamePosition)
        if (areOnTheSamePosition) {
            foodBlock.update();
        }
    }

    function onKeyDown(event: { key: any; }) {
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
}

main();
