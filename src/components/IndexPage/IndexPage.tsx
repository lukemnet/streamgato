import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import { Widget } from 'types';

interface IndexPageProps {
  widgets: Widget[];
}

const IndexPage = ({ widgets }: IndexPageProps) => (
  <Page>
    <Container>
      <Row>
        <Col>
          <h1>IndexPage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
          {widgets.map((widget, key) => (
            <li key={key}>
              <Link to={widget.route}>
                {widget.name}
              </Link>
            </li>
          ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </Page>
);

export default IndexPage;
