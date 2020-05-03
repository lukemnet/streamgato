import React from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import Container from 'components/Container/Container';
import SiteLogo from 'components/SiteLogo/SiteLogo';
import SiteMenu from 'components/SiteMenu/SiteMenu';

const Header = () => (
  <Navbar
    fixed='top'
    bg='dark'
    variant='dark'
  >
    <Container>
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
