import React from 'react';
import Container from 'components/Container/Container';
import { Row, Col } from 'react-bootstrap';
import classnames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  <footer className={cx('Footer', 'mt-3')}>
    <Container>
      <Row>
        <Col>
          <p>Footer</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
