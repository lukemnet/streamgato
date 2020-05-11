import paramsEmpty from './paramsEmpty';

it('should return true for empty params', () => {
  expect(paramsEmpty({})).toBe(true);
});

it('should return false for non-empty params', () => {
  expect(paramsEmpty({
    testKey: 'testValue',
  })).toBe(false);
});
