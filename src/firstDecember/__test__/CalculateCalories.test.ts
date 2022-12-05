import { calculateCalories } from '../CalculateCalories';

describe('calculate calories', () => {
  it('should calculate the highest amount of calories', function () {
    expect(calculateCalories('src/firstDecember/calories.txt')).toEqual('71506');
  });
});
