import React from 'react';
import classnames from 'classnames';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import widgets from 'config/widgets.json';
import metadata from 'config/metadata.json';

const cx = classnames;

const Header = () => (
  <div className={cx('Header')}>
    <Navbar bg="dark" variant="dark">
      <NavLink to="/" className="navbar-brand">{metadata.title}</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Widgets" id="basic-nav-dropdown">
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
    </Navbar>
  </div>
);

export default Header;
