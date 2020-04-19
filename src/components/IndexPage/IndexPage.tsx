import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import GenericPage from 'components/GenericPage/GenericPage';
import { WidgetConfig } from 'components/App/App';

interface IndexPageProps {
  widgets: WidgetConfig[];
}

const IndexPage = ({ widgets }: IndexPageProps) => (
  <GenericPage>
    <Container>
      <Row>
        <Col>
          <h1>IndexPage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
          {widgets.map(widget => (
            <li>
              <Link to={widget.route}>
                {widget.name}
              </Link>
            </li>
          ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </GenericPage>
);

export default IndexPage;
