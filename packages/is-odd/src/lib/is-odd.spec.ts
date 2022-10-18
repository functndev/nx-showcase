import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('should return true with odd numbers', () => {
    expect(isOdd(3)).toEqual(true);
  });

  it('should return false with even numbers', () => {
    expect(isOdd(2)).toEqual(false);
  })
});
