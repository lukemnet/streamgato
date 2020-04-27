import React from 'react';
import cx from 'classnames';
import ConfigForm, { ConfigFormProps } from 'components/ConfigForm/ConfigForm';

const ConfigFormSection = (props: ConfigFormProps) => (
  <div className={cx('ConfigFormSection')}>
    <h2>Form</h2>
    <ConfigForm {...props} />
  </div>
);

export default ConfigFormSection;
