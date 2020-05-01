import React from 'react';
import domRender from 'utils/domRender';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from './Header';

const testedElement = () => (
  <Router>
    <Header />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
