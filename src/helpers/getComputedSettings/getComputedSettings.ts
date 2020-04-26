const getComputedSettings = (settings: any, defaultSettings: any) => {
  const settingKeys = Object.keys(settings);
  let computedSettings = {} as any;

  settingKeys.forEach((settingKey: any) => {
    const value = settings[settingKey];
    const defaultValue = defaultSettings[settingKey];

    if (value && value !== defaultValue) {
      computedSettings[settingKey] = value;
    }
  });

  return computedSettings;
}

export default getComputedSettings;
