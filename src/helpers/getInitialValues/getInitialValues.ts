interface FormField {
  [key:string]: unknown;
  value: string | number;
}

interface FormParam {
  [key:string]: FormField;
}

interface InitialValues {
  [key:string]: string | number;
}

const getInitialValues = (params: FormParam) => {
  const fieldNames = Object.keys(params);
  let initialValues = {} as InitialValues;

  fieldNames.forEach(fieldName => {
    initialValues[fieldName] = params[fieldName].value;
  });

  return initialValues;
}

export default getInitialValues;
