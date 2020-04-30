import constructURLparams from './constructURLparams';

const testParams = {
  h: 1,
  m: 2,
  s: 3,
}

it('should construct URL params', () => {
  expect(constructURLparams(testParams)).toMatchSnapshot();
});


it('should return empty string for empty URL params', () => {
  expect(constructURLparams({})).toEqual("");
});