import { Position } from "./Position";
import { drawBlockInXYPosition } from "./drawBlockInXYPosition";
import { GameObject } from "./interfaces";

export class FoodBlock implements GameObject {
    constructor() {
        this.position = this.getNewPosition();
    }

    draw (ctx: any, lengthOfBlockEdge: number) {
        drawBlockInXYPosition(ctx, this.position.x, this.position.y, 'red', lengthOfBlockEdge)
    }

    getNewPosition = () => {
        return Position.generateRandomPosition(5);
    };

    update = () => {
        this.position = this.getNewPosition();
    }

    position = this.getNewPosition();
}
