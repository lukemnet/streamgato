import React from 'react';
import classnames from 'classnames';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const cx = classnames;

const Header = () => (
  <div className={cx('Header')}>
    <Navbar sticky="top" bg="dark" variant="dark">
      <NavLink to="/" className="navbar-brand">StreamGato</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Widgets" id="basic-nav-dropdown">
            <NavLink to="/countdowntimer" className="dropdown-item">Countdown Timer</NavLink>
            <NavLink to="/streamtimer" className="dropdown-item">Stream Timer</NavLink>
            <NavLink to="/socialmediawidget" className="dropdown-item">Social Media Widget</NavLink>
            <NavLink to="/lastfmrecentsong" className="dropdown-item">Last.fm Recent Song</NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
