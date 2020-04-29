import { WidgetParam, ShorthandValues } from 'types';

const getShorthandValues = (params: WidgetParam[]) => {
  let shorthandValues = {} as ShorthandValues;

  params.forEach(param => {
    const { shorthand, value } = param;
    shorthandValues[shorthand] = value;
  });

  return shorthandValues;
}

export default getShorthandValues;
