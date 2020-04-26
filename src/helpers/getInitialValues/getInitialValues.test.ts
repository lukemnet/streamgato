import getInitialValues from './getInitialValues';

const testParams = {
  hours: {
    type: "number",
    label: "Hours",
    shorthand: "h",
    value: 1,
  },
  minutes: {
    type: "number",
    label: "Minutes",
    shorthand: "m",
    value: 5,
  },
  seconds: {
    type: "number",
    label: "Seconds",
    shorthand: "s",
    value: 30,
  },
}

it('should return initial values', () => {
  expect(getInitialValues(testParams)).toMatchSnapshot();
})