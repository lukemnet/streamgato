import addLeadingZeros from './addLeadingZeros';

const testValues = [ 0, 1, 2, 3, 40, 45, 60 ];

it('should add leading zeros to numbers', () => {
  testValues.forEach(value => {
    expect(addLeadingZeros(value)).toMatchSnapshot();
  });
});

it('should return string', () => {
  testValues.forEach(value => {
    expect(typeof addLeadingZeros(value)).toBe('string');
  });
});
