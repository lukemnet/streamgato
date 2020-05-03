import React from 'react';
import Container from './Container';
import domRender from 'utils/domRender';

const testProps = {
  children: <p>Test element</p>,
};

it('renders correctly', () => {
  domRender(Container, testProps);
});
