import React from 'react';
// import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

interface ConfigFormProps {
  params: any;
  onChange: any;
}

const ConfigForm = ({
  params,
  onChange,
}: ConfigFormProps) => {
  console.log(onChange);

  return (
    <div className={cx('ConfigForm')}>
      <h2>Form</h2>
      <div style={{ overflow: "hidden" }}>
        {JSON.stringify(params)}
      </div>
      {/* <Formik
        initialValues={{
          social: {
            facebook: '',
            twitter: '',
          },
        }}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          <Field name="background-color" />
          <Field name="font-family" />
          <Field name="font-size" />
                  
          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
    </div>
  );
}

export default ConfigForm;
