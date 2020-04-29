import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import getWidgetArray from 'helpers/getWidgetArray/getWidgetArray';
import { Widget } from 'types';

const SiteMenu = () => (
  <>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown
          title="Widgets"
          id="basic-nav-dropdown"
        >
          {(getWidgetArray() as Widget[]).map(widget => (
            <NavLink
              key={widget.alias}
              to={widget.route}
              className="dropdown-item"
            >
              {widget.name}
            </NavLink>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </>
);

export default SiteMenu;

