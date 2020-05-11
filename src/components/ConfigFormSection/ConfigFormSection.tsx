import React from 'react';
import cx from 'classnames';
import ConfigForm, { ConfigFormProps } from 'components/ConfigForm/ConfigForm';

const ConfigFormSection = (props: ConfigFormProps) => (
  <div className={cx('ConfigFormSection')}>
    <h2 className='mt-2'>Configuration</h2>
    <ConfigForm {...props} />
  </div>
);

export default ConfigFormSection;
