import { WidgetParams, ShorthandValues } from 'types';

const getDefaultSettings = (params: WidgetParams) => {
  const fieldNames = Object.keys(params);
  let defaultSettings = {} as ShorthandValues;

  fieldNames.forEach(fieldName => {
    const { shorthand, value }  = params[fieldName];
    defaultSettings[shorthand] = value;
  });

  return defaultSettings;
};

export default getDefaultSettings;
