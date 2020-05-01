import React from 'react';
import getWidgetArray from './getWidgetArray';
import { Widget } from 'types';

const testElement = (widget: Widget, key: string) => (
  <p>Test {JSON.stringify(widget)} {key} </p>
);

it('should return widget array', () => {
  expect(getWidgetArray(testElement)).toMatchSnapshot();
});
