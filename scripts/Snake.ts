import { Position } from "./Position";
import { Direction } from "./enums";
import { GameObject } from "./interfaces";
import { drawBlockInXYPosition } from "./drawBlockInXYPosition";
import grid from "./Grid";

export default class Snake implements GameObject {
    history: any;
    positions: Position[]
    isDead: boolean | undefined
    constructor(startingPosition: Position) {
        this.positions = [startingPosition]
    }

    direction: Direction | undefined = undefined

    draw(ctx: any, lengthOfBlockEdge: number) {
        for (const position of this.positions) {
            drawBlockInXYPosition(ctx, position.x, position.y, 'green', lengthOfBlockEdge)
        }
    }

    setPosition(position: Position, divisions: number) {
        if (position.x <= divisions && position.y <= divisions && position.x >= 1 && position.y >= 1) {
            this.positions[0] = position;
        } else {
            this.isDead = true;
        }
    }

    updatePosition() {
        const gridSize = grid.divisions;
        
        switch(this.direction) {
            case Direction.RIGHT:
                this.setPosition(new Position(this.positions[0].x + 1, this.positions[0].y), gridSize)
                break;
            case Direction.LEFT:
                this.setPosition(new Position(this.positions[0].x - 1, this.positions[0].y), gridSize)
                break;
            case Direction.UP:
                this.setPosition(new Position(this.positions[0].x, this.positions[0].y-1), gridSize)
                break;
            case Direction.DOWN: 
            this.setPosition(new Position(this.positions[0].x, this.positions[0].y+1), gridSize)
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
        this.updatePosition()
        // this.history.push({this.positions[0]})
    }
}

