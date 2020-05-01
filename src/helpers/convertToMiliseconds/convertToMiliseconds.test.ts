import convertToMiliseconds from './convertToMiliseconds';

const testValues = [
  {
    s: 5
  },
  {
    m: 15,
    s: 45,
  },
  {
    h: 4,
    m: 55,
    s: 22,
  },
  {
    h: 48,
    m: 65,
    s: 56,
  },
  {
    h: 22,
    s: 43,
  },
  {
    h: 9,
    m: 49,
  },
];

it('should convert numbers to miliseconds', () => {
  testValues.forEach(value => {
    expect(convertToMiliseconds(value)).toMatchSnapshot();
  });
});
