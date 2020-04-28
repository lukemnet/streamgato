import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/Page/Page';
import WidgetList from 'components/WidgetList/WidgetList';

const IndexPage = () => (
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
          <WidgetList>
            {widget => (
              <li>
                <Link to={widget.route}>
                  {widget.name}
                </Link>
              </li>
            )}
          </WidgetList>
          </ul>
        </Col>
      </Row>
    </Container>
  </Page>
);

export default IndexPage;
