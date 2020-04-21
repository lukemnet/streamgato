import React from 'react';
import cx from 'classnames';
import { Navbar, Container, Row, Col, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import config from 'config/config';

const Header = () => {
  const { metadata, widgets } = config;

  return (
    <div className={cx('Header')}>
      <Navbar bg="dark" variant="dark">
        <Container fluid="md">
          <Row>
            <Col sm={12} md={6}>
              <NavLink to="/" className="navbar-brand">
                <span role="img" aria-label="cat">😺</span>
                &nbsp;
                {metadata.title}
              </NavLink>
            </Col>
            <Col sm={12} md={6}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown
                    title="Widgets"
                    id="basic-nav-dropdown"
                  >
                    {widgets.map((widget, key) => (
                      <NavLink
                        to={widget.route}
                        className="dropdown-item"
                        key={key}
                      >
                        {widget.name}
                      </NavLink>
                    ))}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
