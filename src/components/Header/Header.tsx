import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import SiteLogo from 'components/SiteLogo/SiteLogo';
import SiteMenu from 'components/SiteMenu/SiteMenu';

const Header = () => (
  <Navbar
    fixed='top'
    bg='dark'
    variant='dark'
  >
    <Container fluid='xl'>
      <Row>
        <Col
          xs={12}
          sm={6}
        >
          <SiteLogo />
        </Col>
        <Col
          xs={12}
          sm={6}
        >
          <SiteMenu />
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Header;
