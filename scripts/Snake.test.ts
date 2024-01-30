import { Position } from "./Position";
import Snake from "./Snake"
import { Direction } from "./enums";

describe('Snake', () => {
    it.skip('should increase 1 in length when it eats food', () =>  {
        // Arrange
        const snake = new Snake(new Position(5,5))
        const originalLength = snake.getLength();
        // Act
        snake.eatFood();
        // Assert
        expect(snake.getLength()).toBe(originalLength + 1);
    })

    it('should die if its heads position is outside the bounds of the grid', () => {
        // Arrange
        // assuming grid is of size 5
        const snake = new Snake(new Position(5,5))
        snake.direction = Direction.RIGHT;
        // Act
        snake.update(false) 

        // Assert (
        expect(snake.isDead).toBe(true)
    })

    describe('updatePosition', () => {
        it('should move to the right if direction is right', () => {
            // Arrange
            const snake = new Snake(new Position(3, 3))
            snake.direction = Direction.RIGHT
            // Act
            snake.updatePosition()

            // Assert
        })

        it('it should not move if there is no direction set', () => {
            // Arrange
            const snake = new Snake(new Position(3,3))
            snake.direction = undefined

            // Act
            snake.updatePosition();

            // Assert
            expect(snake.positions[0].x).toEqual(3)
            expect(snake.positions[0].y).toEqual(3)
        })
    })

    describe('update', () => {
        it.todo('should update the position of the snake')
    })
})