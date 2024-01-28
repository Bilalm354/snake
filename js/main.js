"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake_1 = require("./Snake");
function isTheSamePosition(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y;
}
function generateRandomPosition(max) {
    return {
        x: Math.floor((Math.random() * max)) + 1,
        y: Math.floor((Math.random() * max)) + 1
    };
}
var Grid = /** @class */ (function () {
    function Grid() {
        this.divisions = 5;
    }
    Grid.prototype.draw = function (ctx) {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "gray";
        for (var xPosition = 1; xPosition <= this.divisions; xPosition++) {
            for (var yPosition = 1; yPosition <= this.divisions; yPosition++) {
                var startX = (xPosition - 1) * lengthOfBlockEdge;
                var startY = (yPosition - 1) * lengthOfBlockEdge;
                ctx.beginPath();
                ctx.rect(startX, startY, lengthOfBlockEdge, lengthOfBlockEdge);
                ctx.stroke();
            }
        }
    };
    return Grid;
}());
var FoodBlock = /** @class */ (function () {
    function FoodBlock() {
        this.getNewPosition = function (snake) {
            if (snake === void 0) { snake = {}; }
            return generateRandomPosition(grid.divisions);
        };
        this.position = this.getNewPosition();
        this.position = this.getNewPosition();
    }
    return FoodBlock;
}());
var grid = new Grid();
var foodBlock = new FoodBlock();
var snake = new Snake_1.Snake();
var canvas = document.querySelector("canvas");
if (!canvas) {
    throw new Error('Canvas not found');
}
var lengthOfBlockEdge = canvas.width / grid.divisions;
function main() {
    document.addEventListener('keydown', onKeyDown);
    var ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }
    draw(ctx);
    setInterval(function () {
        console.log({ snake: snake });
        updateGame();
        draw(ctx);
    }, 1000);
}
function onKeyDown(event) {
    console.log(mapKeyToDirection(event.key));
    var newDirection = mapKeyToDirection(event.key);
    if (newDirection) {
        snake.direction = newDirection;
    }
}
function mapKeyToDirection(key) {
    switch (key) {
        case 'ArrowLeft':
            return "left" /* Direction.LEFT */;
        case 'ArrowRight':
            return "right" /* Direction.RIGHT */;
        case 'ArrowUp':
            return "up" /* Direction.UP */;
        case 'ArrowDown':
            return "down" /* Direction.DOWN */;
    }
}
function draw(ctx) {
    drawBackground(ctx);
    grid.draw(ctx);
    drawSnake(ctx);
    drawFoodBlock(ctx);
}
function drawBackground(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.width);
}
function drawSnake(ctx) {
    drawBlockInXYPosition(ctx, snake.positions[0].x, snake.positions[0].y, 'green');
}
function drawFoodBlock(ctx) {
    drawBlockInXYPosition(ctx, foodBlock.position.x, foodBlock.position.y, 'red');
}
function drawBlockInXYPosition(ctx, x, y, colour) {
    ctx.fillStyle = colour;
    ctx.fillRect((x * lengthOfBlockEdge) - lengthOfBlockEdge, (y * lengthOfBlockEdge - lengthOfBlockEdge), lengthOfBlockEdge, lengthOfBlockEdge);
}
function setNewSnakePosition() {
    if (snake.direction === "right" /* Direction.RIGHT */) {
        snake.setNewPosition({ x: snake.positions[0].x + 1, y: snake.positions[0].y }, grid.divisions);
    }
    if (snake.direction === "left" /* Direction.LEFT */) {
        snake.setNewPosition({ x: snake.positions[0].x - 1, y: snake.positions[0].y }, grid.divisions);
    }
    if (snake.direction === "up" /* Direction.UP */) {
        snake.setNewPosition({ x: snake.positions[0].x, y: snake.positions[0].y - 1 }, grid.divisions);
    }
    if (snake.direction === "down" /* Direction.DOWN */) {
        snake.setNewPosition({ x: snake.positions[0].x, y: snake.positions[0].y + 1 }, grid.divisions);
    }
}
function updateGame() {
    setNewSnakePosition();
    if (isTheSamePosition(snake.positions[0], foodBlock.position)) {
        foodBlock.position = foodBlock.getNewPosition(snake);
        // and add tail to snake
        snake.addTail();
    }
}
main();
