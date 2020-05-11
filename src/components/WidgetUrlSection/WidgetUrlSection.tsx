import React from 'react';
import classnames from 'classnames';
import { Form, Row, Col } from 'react-bootstrap';
import WidgetUrl from 'components/WidgetUrl/WidgetUrl';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  origin: string;
  alias: string;
  params: ShorthandValues;
}

const cx = classnames;

const WidgetUrlSection = (props: WidgetUrlProps) => (
  <Form.Group
    as={Row}
    className={cx('mb-0', 'mt-0', 'pt-0', 'pb-0')}
  >
    <Form.Label
      column
      xs={4}
      sm={3}
      className={cx('mb-0', 'text-right')}
    >
      Widget&nbsp;URL:
    </Form.Label>
    <Col
      xs={8}
      sm={9}
    >
      <WidgetUrl {...props}/>
    </Col>
  </Form.Group>
);

export default WidgetUrlSection;
