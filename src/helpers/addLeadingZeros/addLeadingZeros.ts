const addLeadingZeros = (value: number) =>
  value < 10
    ? `0${value}`
    : String(value);

export default addLeadingZeros;
