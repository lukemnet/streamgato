import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SiteMenu from './SiteMenu';
import domRender from 'utils/domRender';

const testedElement = () => (
  <Router>
    <SiteMenu />
  </Router>
);

it('should render correctly', () => {
  domRender(testedElement);
});
