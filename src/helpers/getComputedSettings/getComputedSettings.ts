import { ShorthandValues } from 'types';

const getComputedSettings = (settings: ShorthandValues, defaultSettings: ShorthandValues) => {
  const settingKeys = Object.keys(settings);
  let computedSettings = {} as ShorthandValues;

  settingKeys.forEach((settingKey) => {
    const value = settings[settingKey];
    const defaultValue = defaultSettings[settingKey];

    if (value && value !== defaultValue) {
      computedSettings[settingKey] = value;
    }
  });

  return computedSettings;
}

export default getComputedSettings;
