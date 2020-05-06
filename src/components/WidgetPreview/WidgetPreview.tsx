import React from 'react';
import classnames from 'classnames/bind';
import { Card } from 'react-bootstrap';
import { ShorthandValues } from 'types';
import styles from './WidgetPreview.module.scss';

interface WidgetProps {
  alias: string;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreview = ({ alias, params }: WidgetProps) => (
  <Card className={cx('WidgetPreview', 'mb-3')}>
    <Card.Header>Widget preview ({alias})</Card.Header>
    <Card.Body>
      {JSON.stringify(params)}
    </Card.Body>
  </Card>
);

export default WidgetPreview;
