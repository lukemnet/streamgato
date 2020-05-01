import React from 'react';
import WidgetList from './WidgetList';
import domRender from 'utils/domRender';
import { Widget } from 'types';

const TestChild = (widget: Widget) => (
  <div>
    {JSON.stringify(widget)}
  </div>
);

const testElement = () => (
  <WidgetList>
    {widget => <TestChild {...widget} />}
  </WidgetList>
);

it('renders correctly', () => {
  domRender(testElement);
});
