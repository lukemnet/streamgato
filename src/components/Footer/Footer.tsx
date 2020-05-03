import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  <div className={cx('Footer')}>
    <Container fluid='md'>
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
