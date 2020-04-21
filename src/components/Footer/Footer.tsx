import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cx from 'classnames';

const Footer = () => (
  <div className={cx('Footer')}>
    <Container fluid="md">
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
