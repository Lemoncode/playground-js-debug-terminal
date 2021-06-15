import { sum } from './calculator';

describe('calculator specs', () => {
  describe('sum', () => {
    it('should return 5 when it feeds a equals 2 and b equals 3', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = sum(a, b);

      // Assert
      expect(result).toEqual(5);
    });
  });
});
