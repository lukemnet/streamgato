import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import domRender from 'utils/domRender';
import IndexPage from './IndexPage';

const testProps = {
  widgets: [
    {
      route: '/testroute1',
      name: 'Test widget 1',
    },
    {
      route: '/testroute2',
      name: 'Test widget 2',
    },
    {
      route: '/testroute3',
      name: 'Test widget 3',
    },
  ],
}

const testedElement = () => (
  <Router>
    <IndexPage {...testProps} />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
