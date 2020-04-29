import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import domRender from 'utils/domRender';
import IndexPage from './IndexPage';

const testedElement = () => (
  <Router>
    <IndexPage />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
