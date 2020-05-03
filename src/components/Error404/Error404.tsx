import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'components/Container/Container';
import Page from 'components/Page/Page';

const Error404 = () => (
  <Page>
    <Container>
      <Row>
        <Col>
          <h1>Error 404</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Page not found</p>
        </Col>
      </Row>
    </Container>
  </Page>
);

export default Error404;
