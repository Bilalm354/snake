import { Position } from "./Position"

describe('Position', () => {
    describe('isTheSamePositionAs', () => {
        it('should return false if they are not on the same position', () => {
            // Arrange
            const position = new Position(1, 1)
            const comparisionPosition = new Position(2,1)
            // Act

            // Assert
            expect(position.isTheSamePositionAs(comparisionPosition)).toBe(false);
        })

        it('should return true if they are on the same position', () => {
            // Arrange
            const position = new Position(2, 1)
            const comparisionPosition = new Position(2,1)
            // Act

            // Assert
            expect(position.isTheSamePositionAs(comparisionPosition)).toBe(true);
        })
    })
})