import { Snake } from "./Snake"
import { Direction } from "./enums";

describe('Snake', () => {
    it.skip('should increase 1 in length when it eats food', () =>  {
        // Arrange
        const snake = new Snake({x:5, y:5})
        const originalLength = snake.getLength();
        // Act
        snake.eatFood();
        // Assert
        expect(snake.getLength()).toBe(originalLength + 1);
    })

    it('should save its current position to history', () => {

    })

    describe('updatePosition', () => {
        it('should move to the right if direction is right', () => {
            // Arrange
            const snake = new Snake({x: 3, y: 3})
            snake.direction = Direction.RIGHT
            // Act
            snake.updatePosition(5)

            // Assert
            expect(snake.positions).toStrictEqual([{x:4, y:3}])
        })
    })
})