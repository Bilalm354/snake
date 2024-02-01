import { Direction } from "./enums";

export class Controls {
    left: string;
    right: string;
    up: string;
    down: string;

    constructor({left, right, up, down}: {left: string, right: string, up: string, down: string}) {
        this.left = left;
        this.right = right;
        this.up = up;
        this.down = down;
    }

    mapKeyToDirection(key: any): Direction | undefined {
        switch (key) {
            case this.left:
                return Direction.LEFT;
            case this.right:
                return Direction.RIGHT;
            case this.up:
                return Direction.UP;
            case this.down:
                return Direction.DOWN;
        }
    }
}
