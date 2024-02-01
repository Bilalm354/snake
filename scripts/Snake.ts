import { Position } from "./Position";
import { Direction } from "./enums";
import { GameObject } from "./interfaces";
import { drawBlockInXYPosition } from "./drawBlockInXYPosition";
import grid from "./Grid";
import { Controls } from "./Controls";

export default class Snake implements GameObject {
    positions: Position[]
    isDead: boolean | undefined
    previousLastPosition: Position | undefined;
    direction: Direction | undefined = undefined
    controls: Controls | undefined
    colour: string;
    
    constructor(startingPosition: Position, controls: Controls = new Controls({left: 'ArrowLeft', right: 'ArrowRight', up: 'ArrowUp', down: 'ArrowDown'}), colour: string = 'darkgrey') {
        this.positions = [startingPosition]
        this.controls = new Controls({left: controls.left, right: controls.right, up: controls.up, down: controls.down});
        this.colour = colour;
    }

    draw(ctx: any, lengthOfBlockEdge: number) {
        for (const position of this.positions) {
            drawBlockInXYPosition(ctx, position.x, position.y, this.colour, lengthOfBlockEdge)
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
  
        const isNotOutOfBounds = newPosition.x <= divisions && newPosition.y <= divisions && newPosition.x >= 1 && newPosition.y >= 1;
        const touchedItSelf = this.positions.filter(position => newPosition && newPosition.isTheSamePositionAs(position)).length > 0; 

        if (isNotOutOfBounds && !touchedItSelf) {
            this.positions.unshift(newPosition);
            this.positions.pop();
        } else {
            this.isDead = true;
        }
    }

    eatFood() {
        if (!this.previousLastPosition) throw Error('no previousLastPosition')
        this.positions.push(new Position(this.previousLastPosition.x, this.previousLastPosition.y))
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

    mapKeyToDirection(key: any): Direction | undefined {
        return this.controls?.mapKeyToDirection(key)
    }
}

