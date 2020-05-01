import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import domRender from 'utils/domRender';
import Page from './Page';

const testProps = {
  className: 'testClass',
  title: 'Test title',
  children: <div>Test child</div>,
};

const testedElement = () => (
  <Router>
    <Page {...testProps} />
  </Router>
);

it('renders correctly', () => {
  domRender(testedElement);
});
