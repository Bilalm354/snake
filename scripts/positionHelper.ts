import { Direction } from "./enums"
import { Position } from "./interfaces"

export function getPositionBehindPosition(position: Position, direction: Direction): Position {
    switch (direction) {
        case Direction.LEFT:
            return { x: position.x+1, y:position.y }
        case Direction.RIGHT:
            return { x: position.x-1, y:position.y }
        case Direction.UP:
            return { x: position.x, y:position.y+1 }
        case Direction.DOWN:
            return { x: position.x, y:position.y-1 }
    }
}