export class Position {
    static areTheSamePosition(positionA: Position, positionB: Position) {
        return positionA.x === positionB.x && positionA.y === positionB.y
    }
    static generateRandomPosition = (max: number) => {
        return new Position(Math.floor((Math.random() * max)) + 1, Math.floor((Math.random() * max)) + 1)
    }

    x: number
    y: number
    constructor(x: number, y: number) {
        this.x=x
        this.y=y
    }

    isTheSamePositionAs(position: Position): boolean {
        return this.x === position.x && this.y === position.y
    }
}
