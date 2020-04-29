import React from 'react';
import Error404 from './Error404';
import { MemoryRouter as Router } from 'react-router-dom';
import domRender from 'utils/domRender';

const testedElement = () => (
  <Router>
    <Error404 />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
