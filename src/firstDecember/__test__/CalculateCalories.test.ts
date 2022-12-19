import { calculateCalories, calculateTotalTopThreeCalories } from '../CalculateCalories';

describe('Day 1 part 1', () => {
  it('should calculate the highest amount of calories', function () {
    expect(calculateCalories('src/firstDecember/calories.txt')).toEqual('71506');
  });
});

describe('Day 1 part 2', () => {
  it('should calculate the top three highest amount of calories', function () {
    expect(calculateTotalTopThreeCalories('src/firstDecember/calories.txt')).toEqual('209603');
  });
});
