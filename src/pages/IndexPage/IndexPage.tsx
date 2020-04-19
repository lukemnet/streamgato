import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import GenericPage from 'components/GenericPage/GenericPage';

const IndexPage = () => (
  <GenericPage>
    <Container>
      <Col>
        <Row>
          <h1>IndexPage</h1>
          <ul>
            <li>
              <Link to="/countdowntimer">
                Countdown Timer
              </Link>
            </li>
            <li>
              <Link to="/streamtimer">
                Stream Timer
              </Link>
            </li>
            <li>
              <Link to="/socialmediawidget">
                Social Media Widget
              </Link>
            </li>
            <li>
              <Link to="/lastfmrecentsong">
                Last.fm Recent Song
              </Link>
            </li>
          </ul>
        </Row>
      </Col>
    </Container>
  </GenericPage>
);

export default IndexPage;
