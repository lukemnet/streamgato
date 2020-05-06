import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import getWidgetArray from 'helpers/getWidgetArray/getWidgetArray';
import { Widget } from 'types';

const SiteMenu = () => (
  <Nav>
    <NavDropdown
      title='Widgets'
      id='widgets-dropdown'
    >
      {(getWidgetArray() as Widget[]).map(({
        alias,
        route,
        name,
      }) => (
        <NavDropdown.Item
          key={alias}
          href={route}
        >
          {name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  </Nav>
);

export default SiteMenu;
