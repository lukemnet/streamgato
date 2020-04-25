import React from 'react';
// import { Formik, Form, FormikProps, Field } from 'formik';
import cx from 'classnames';
import ConfigForm, { onChangeFn } from 'components/ConfigForm/ConfigForm';
// import getInitialValues from 'helpers/getInitialValues/getInitialValues';

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
  onChange: onChangeFn;
}

const ConfigFormSection = ({
  params,
  onChange,
}: ConfigFormProps) => (
  <div className={cx('ConfigFormSection')}>
    <h2>Form</h2>
    <ConfigForm
      params={params}
      onChange={onChange}
    />
  </div>
);

export default ConfigFormSection;
