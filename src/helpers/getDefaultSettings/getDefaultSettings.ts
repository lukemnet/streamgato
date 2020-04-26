interface FormField {
  [key:string]: string | number;
  value: string | number;
}

interface FormParam {
  [key:string]: FormField;
}

interface InitialValues {
  [key:string]: string | number;
}

const getDefaultSettings = (params: FormParam) => {
  const fieldNames = Object.keys(params);
  let defaultSettings = {} as InitialValues;

  fieldNames.forEach(fieldName => {
    const { shorthand, value }  = params[fieldName];
    defaultSettings[shorthand] = value;
  });

  return defaultSettings;
}

export default getDefaultSettings;
