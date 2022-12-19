import { rockPaperScissors } from '../RockPaperScissors';

describe('Day 2 part 1', () => {
  it('should calculate the total score', function () {
    expect(rockPaperScissors('src/secondDecember/strategyGuide.txt')).toEqual(9177);
  });
});
