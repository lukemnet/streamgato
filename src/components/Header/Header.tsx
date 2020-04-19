import React from 'react';
import classnames from 'classnames';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import widgets from 'config/widgets.json';

const cx = classnames;


const Header = () => (
  <div className={cx('Header')}>
    <Navbar sticky="top" bg="dark" variant="dark">
      <NavLink to="/" className="navbar-brand">StreamGato</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Widgets" id="basic-nav-dropdown">
          {widgets.map(widget => (
            <NavLink
              to={widget.route}
              className="dropdown-item"
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
