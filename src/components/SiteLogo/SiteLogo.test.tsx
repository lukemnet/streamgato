import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SiteLogo from './SiteLogo';
import domRender from 'utils/domRender';

const testedElement = () => (
  <Router>
    <SiteLogo />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
})