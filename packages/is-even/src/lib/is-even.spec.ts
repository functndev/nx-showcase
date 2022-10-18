import { isEven } from './is-even';

describe('isEven', () => {
  it('should return true with even numbers', () => {
    expect(isEven(2)).toEqual(true);
  });

  it('should return false with odd numbers', () => {
    expect(isEven(3)).toEqual(false);
  })
});
