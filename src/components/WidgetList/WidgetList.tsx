import React, { ReactElement, Fragment } from 'react';
import getWidgetArray from 'helpers/getWidgetArray/getWidgetArray';
import { Widget } from 'types';

interface WidgetListProps {
  children: (widget: Widget) => ReactElement;
}

const WidgetList = ({ children }: WidgetListProps) => (
  <>
    {getWidgetArray((widget, key) => (
      <Fragment key={key}>
        {children(widget)}
      </Fragment>
    ))}
  </>
);

export default WidgetList;
