import React from 'react';
import classnames from 'classnames';

interface ConfigFormProps {
  settings: any;
}

const cx = classnames;

const ConfigForm = ({
  settings,
}: ConfigFormProps) => (
  <div className={cx('ConfigForm')}>
    {JSON.stringify(settings)}
  </div>
);

export default ConfigForm;
