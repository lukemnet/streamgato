import React from 'react';
import classnames from 'classnames/bind';
import { ShorthandValues } from 'types';
import styles from './WidgetPreview.module.scss';

interface WidgetProps {
  alias: string;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreview = ({ alias, params }: WidgetProps) => (
  <div className={cx('WidgetPreview', 'mt-1', 'mb-3')}>
    <h2>Widget preview ({alias})</h2>
    <div style={{ overflow: 'hidden' }}>
      {JSON.stringify(params)}
    </div>
  </div>
);

export default WidgetPreview;
