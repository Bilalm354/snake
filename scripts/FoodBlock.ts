import grid from "./Grid";
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

    reset(): void {
        this.position = this.getNewPosition();
    }

    getNewPosition = () => {
        return Position.generateRandomPosition(grid.divisions);
    };

    update = () => {
        this.position = this.getNewPosition();
    }

    position = this.getNewPosition();
}
