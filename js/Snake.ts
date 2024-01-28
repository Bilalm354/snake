import { Direction } from "./enums";
import { Position } from "./interfaces";

export class Snake {
    history: any;
    positions: Position[]
    constructor(startingPosition: Position) {
        this.positions = [startingPosition]
    }

    direction = Direction.RIGHT

    setPosition(position: Position, divisions: number) {
        if (position.x <= divisions && position.y <= divisions && position.x >= 1 && position.y >= 1) {
            this.positions[0] = position;
        }
    }

    updatePosition(gridSize: number) {
        switch(this.direction) {
            case Direction.RIGHT:
                this.setPosition({ x: this.positions[0].x + 1, y: this.positions[0].y }, gridSize);
                break;
            case Direction.LEFT:
                this.setPosition({ x: this.positions[0].x - 1, y: this.positions[0].y }, gridSize);
                break;
            case Direction.UP:
                this.setPosition({ x: this.positions[0].x, y: this.positions[0].y - 1 }, gridSize);
                break;
            case Direction.DOWN: 
                this.setPosition({ x: this.positions[0].x, y: this.positions[0].y + 1 }, gridSize)
                break;
        }
    }

    eatFood() {
    }

    getBehindBlock() {
        this.positions[0]
    }

    getLength() {
        return this.positions.length;
    }

    update(_isOnSamePositionAsFood: boolean) {
        this.updatePosition(5)
        // this.history.push({this.positions[0]})
    }
}

