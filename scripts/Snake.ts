import { Position } from "./Position";
import { Direction } from "./enums";
import { GameObject } from "./interfaces";
import { drawBlockInXYPosition } from "./drawBlockInXYPosition";
import grid from "./Grid";

export default class Snake implements GameObject {
    history: any;
    positions: Position[]
    isDead: boolean | undefined
    previousLastPosition: Position | undefined;
    constructor(startingPosition: Position) {
        this.positions = [startingPosition]
    }

    direction: Direction | undefined = undefined

    draw(ctx: any, lengthOfBlockEdge: number) {
        for (const position of this.positions) {
            drawBlockInXYPosition(ctx, position.x, position.y, 'green', lengthOfBlockEdge)
        }
    }

    updatePosition() {
        const position = this.positions[0];
        const { divisions } = grid;
        let newPosition: Position | undefined = undefined;
        switch(this.direction) {
            case Direction.RIGHT:
                newPosition = (new Position(position.x + 1, position.y))
                break;
            case Direction.LEFT:
                newPosition = (new Position(position.x - 1, position.y))
                break;
            case Direction.UP:
                newPosition = (new Position(position.x, position.y - 1))
                break;
            case Direction.DOWN: 
                newPosition = (new Position(position.x, position.y + 1))
                break;
            default:
                return;
        }
        const isOutOfBounds = newPosition.x <= divisions && newPosition.y <= divisions && newPosition.x >= 1 && newPosition.y >= 1;
        const touchedItSelf = this.positions.includes(newPosition);
        if (isOutOfBounds || touchedItSelf) {
            this.positions.unshift(newPosition);
            this.positions.pop();
        } else {
            this.isDead = true;
        }
    }

    eatFood() {
        if (!this.previousLastPosition) throw Error('no previousLastPosition')
        this.positions.push(new Position(this.previousLastPosition!.x, this.previousLastPosition!.y))
    }

    getBehindBlock() {
        this.positions[0]
    }

    getLength() {
        return this.positions.length;
    }

    update(_isOnSamePositionAsFood: boolean) {
        this.previousLastPosition = this.positions[this.positions.length-1]
        this.updatePosition()
        if(_isOnSamePositionAsFood) {
            this.eatFood()
        }
    }
}

