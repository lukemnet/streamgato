import React from 'react';
import classnames from 'classnames/bind';
import { Card } from 'react-bootstrap';
import { WidgetAlias, ShorthandValues } from 'types';
import WidgetPreview from 'components/WidgetPreview/WidgetPreview';
import styles from './WidgetPreviewSection.module.scss';

interface WidgetPreviewSectionProps {
  alias: WidgetAlias;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreviewSection = ({ alias, params }: WidgetPreviewSectionProps) => (
  <Card className={cx('WidgetPreviewSection', 'mb-3')}>
    <Card.Header>Widget preview</Card.Header>
    <Card.Body className={cx('p-0')}>
      <WidgetPreview
        alias={alias}
        params={params}
      />
    </Card.Body>
  </Card>
);

export default WidgetPreviewSection;
