import { Direction } from "./constants";


export class Snake {
    positions = [{
        x: 5,
        y: 5
    }]
    direction = Direction.RIGHT

    setNewPosition(position: any, divisions: number) {
        if (position.x <= divisions && position.y <= divisions && position.x >= 1 && position.y >= 1) {
            this.positions[0] = position;
        }
    }

    addTail() { //
        // positions.push({ x: 1, })
    }
}