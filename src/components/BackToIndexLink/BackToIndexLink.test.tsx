import React from 'react';
import domRender from 'utils/domRender';
import { MemoryRouter as Router } from 'react-router-dom';
import BackToIndexLink from './BackToIndexLink';

const testedElement = () => (
  <Router>
    <BackToIndexLink />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
