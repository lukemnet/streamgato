import React, { ChangeEvent } from 'react';

export type onChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;

interface ConfigFormProps {
  params: any;
  onChange: onChangeFn;
}

const ConfigForm = ({
  params,
  onChange,
}: ConfigFormProps) => {
  console.log(onChange);
  const fieldNames = Object.keys(params);

  return (
    <form>
      {fieldNames.map((fieldName: any) => {
        const field = params[fieldName];
        return (
          <div key={fieldName}>
            <label>{field.label}</label>
            <input
              type="text"
              name={fieldName}
              onChange={onChange}
            />
          </div>
        );
      })}
    </form>
    // <Formik
    //   initialValues={initialValues}
      
    //   onSubmit={() => {}}
    // >
    //   {(props: FormikProps<any>) => (
    //     <Form>
    //       {fieldNames.map(fieldName => {
    //         const fieldParams = params[fieldName];

    //         return (
    //           <Field key={fieldName} name={fieldName}>
    //             {({
    //               field,
    //             }: any) => {
    //               console.log(field);
    //               return (
    //                 <div>
    //                   <label>{fieldParams.label}</label>
    //                   <input
    //                     onChange={() => onChange()}
    //                     type={fieldParams.type}
    //                     name={fieldParams.name}
    //                     value={field.value}
    //                   />
    //                 </div>
    //               );
    //             }}
    //           </Field>
    //         );
    //       })}
    //   </Form>
    //   )}
    // </Formik>
);
}

export default ConfigForm;
