import { ReactElement } from 'react';
import { widgets } from 'config/config';
import { Widget } from 'types';

type Element = (widget: Widget, key: string) =>
  ReactElement<{ widget: Widget, key: string }>;

const getWidgetArray = (element?: Element) => {
  if (element) {
    return widgets.map(widget => element(widget, widget.alias));
  }
  return widgets;
};

export default getWidgetArray;
