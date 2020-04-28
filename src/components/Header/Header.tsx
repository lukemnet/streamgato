import React from 'react';
import { Navbar, Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import SiteLogo from 'components/SiteLogo/SiteLogo';
import WidgetList from 'components/WidgetList/WidgetList';

const Header = () => (
  <Navbar
    fixed="top"
    bg="dark"
    variant="dark"
  >
    <Container fluid="xl">
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Widgets"
                id="basic-nav-dropdown"
              >
                <WidgetList>
                  {widget => (
                    <NavLink
                      to={widget.route}
                      className="dropdown-item"
                    >
                      {widget.name}
                    </NavLink>
                  )}
                </WidgetList>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Header;
