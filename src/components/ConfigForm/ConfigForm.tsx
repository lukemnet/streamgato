import React from 'react';
import { Formik, Form/*, Field*/ } from 'formik';
import cx from 'classnames';

export interface ConfigFormField {
  type: string;
  label: string;
  value: string;
}

interface ConfigFormParam {
  [key:string]: ConfigFormField;
}

interface ConfigFormProps {
  params: ConfigFormParam;
  onChange: Function;
}

const ConfigForm = ({
  params,
  onChange,
}: ConfigFormProps) => {
  console.log(onChange);
  const fields = Object.keys(params);

  return (
    <div className={cx('ConfigForm')}>
      <h2>Form</h2>
      <Formik
        initialValues={params}
        onSubmit={() => {}}
      >
        <Form>
          {fields.map(field => (
            <div>
              {JSON.stringify(params[field])}
            </div>
          ))}
        </Form>
      </Formik>
    </div>
  );
}

export default ConfigForm;
