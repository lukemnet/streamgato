import paramsNotEmpty from './paramsNotEmpty';

it('should return false for empty params', () => {
  expect(paramsNotEmpty({})).toBe(false);
});

it('should return true for non-empty params', () => {
  expect(paramsNotEmpty({
    testKey: 'testValue',
  })).toBe(true);
});
