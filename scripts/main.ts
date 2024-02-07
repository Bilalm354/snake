import { Controls } from "./Controls";
import { FoodBlock } from "./FoodBlock";
import grid from "./Grid";
import { Position } from "./Position";
import Snake from "./Snake";

function buildStartingSnakes() {
    return [
        new Snake(new Position(5, 10), new Controls({left: 'ArrowLeft', right: 'ArrowRight', up: 'ArrowUp', down: 'ArrowDown'}), 'blue'), 
        new Snake(new Position(15, 10), new Controls({left: 'a', right: 'd', up: 'w', down: 's'}), 'orange')
    ];
}

export function main(canvas: HTMLCanvasElement) {
    // Game state
    const foodBlock = new FoodBlock();
    const snakes = buildStartingSnakes();
    let isGameOver = false;

    if(!canvas) {
        throw new Error('Canvas not found')
    }
    const lengthOfBlockEdge = canvas!.width / grid.divisions;
    document.addEventListener('keydown', onKeyDown)
    
    window.addEventListener('newGame', () => {
        snakes.forEach(snake => snake.reset())
        foodBlock.reset()
    })

    const ctx = canvas!.getContext("2d");
    if (!ctx) {
        return
    }
    drawEverything(ctx);

    const interval = setInterval((): void => {
        const isASnakeDead = snakes.some(snake => snake.isDead)
        const didAGameJustEnd = !isGameOver && isASnakeDead
        if (didAGameJustEnd) {
            window.dispatchEvent(new Event('gameOver'))
            alert('Game Over!');
        } 

        isGameOver = isASnakeDead

        if (!isGameOver) {
            updateGame()
        }
        drawEverything(ctx);
    }, 200)

    function drawEverything(ctx: CanvasRenderingContext2D) {
        drawBackground(ctx);
        for (const x of [foodBlock, ...snakes]) { // add grid if want to see it
            x.draw(ctx, lengthOfBlockEdge);
        }
    }
    
    function drawBackground(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "darkgreen";
        ctx.fillRect(0, 0, canvas.width, canvas.width);
    }
    
    function updateGame() {
        for (const snake of snakes) {
            const areOnTheSamePosition = Position.areTheSamePosition(snake.positions[0], foodBlock.position)
            snake.update(areOnTheSamePosition)
            if (areOnTheSamePosition) {
                foodBlock.update();
            }
        }
    }

    function onKeyDown(event: { key: any; }) {
        for (const snake of snakes) {
            const newDirection = snake.mapKeyToDirection(event.key)
            if (newDirection) {
                snake.direction = newDirection;
            }
        }
    }
}
