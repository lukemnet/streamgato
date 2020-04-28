import { ReactElement } from 'react';
import { widgets } from 'config/config';
import { Widget } from 'types';

type Element = (widget: Widget, key: string) => ReactElement;

const getWidgetArray = (element: Element) =>
  widgets.map(widget => element(widget, widget.alias));

export default getWidgetArray;
