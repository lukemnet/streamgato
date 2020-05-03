import React from 'react';
import Container from 'components/Container/Container';
import { Row, Col } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  <div className={cx('Footer')}>
    <Container>
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
