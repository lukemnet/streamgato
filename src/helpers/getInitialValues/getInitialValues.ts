interface FormField {
  value: string;
}

interface FormParam {
  [key:string]: FormField;
}

interface InitialValues {
  [key:string]: string | number;
}

const getInitialValues = (fieldNames: string[], params: FormParam) => {
  let initialValues = {} as InitialValues;

  fieldNames.forEach(fieldName => {
    initialValues[fieldName] = params[fieldName].value;
  });

  return initialValues;
}

export default getInitialValues;
