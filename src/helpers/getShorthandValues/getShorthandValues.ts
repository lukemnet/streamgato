interface Params {
  shorthand: string;
  value: string | number;
};

const getShorthandValues = (params: Params[]) => {
  let shorthandValues = {} as { [key: string]: string | number };

  params.forEach(param => {
    const { shorthand, value } = param;
    shorthandValues[shorthand] = value;
  });

  return shorthandValues;
}

export default getShorthandValues;
