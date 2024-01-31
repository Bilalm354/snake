import grid from "./Grid";
import { Position } from "./Position";
import Snake from "./Snake"
import { Direction } from "./enums";

describe('Snake', () => {
    describe('eatFood', () => {
        it('should increase 1 in length when it eats food', () =>  {
            // Arrange
            const snake = new Snake(new Position(3,3))
            snake.direction=Direction.RIGHT;
            snake.previousLastPosition = new Position(2,3)

            const originalLength = snake.getLength();
            // Act
            snake.eatFood();
            // Assert
            expect(snake.getLength()).toBe(originalLength + 1);
        })
    })

    describe('updatePosition', () => {
        it('should move to the right if direction is right', () => {
            // Arrange
            const snake = new Snake(new Position(3, 3))
            snake.direction = Direction.RIGHT
            // Act
            snake.updatePosition()

            // Assert
            expect(snake.positions[0].x).toEqual(4)
            expect(snake.positions[0].y).toEqual(3)
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
        it('should die if its heads position is outside the bounds of the grid', () => {
            // Arrange
            const size = grid.divisions;
            const snake = new Snake(new Position(size,size))
            snake.direction = Direction.RIGHT;
            // Act
            snake.update(false) 
    
            // Assert (
            expect(snake.isDead).toBe(true)
        })

        it('should die if its head touches its body', () => {
            //
        })

        it('should ensure that the body of the snake follows the head in stright line', () => {
            // Arrange
            const snake = new Snake(new Position(1,1));
            snake.direction = Direction.RIGHT;
            
            // Act
            snake.update(true);

            // Assert
            expect(snake.positions[0].isTheSamePositionAs(new Position(2,1))).toBe(true);

            // Act 
            snake.update(false);

            // Assert

        })

        it('should body should bend around where head bends', () => {
            // Arrange
            const snake = new Snake(new Position(1,1));
            snake.direction = Direction.RIGHT;
            snake.update(true);
            // now snake positions should be [(2,1), (1,1)]

            // Act
            snake.direction = Direction.DOWN;
            snake.update(false);

            // Assert
            expect(snake.positions[0].isTheSamePositionAs(new Position(2, 2))).toBe(true);
            expect(snake.positions[1].isTheSamePositionAs(new Position(2, 1))).toBe(true);
        })
    })
})