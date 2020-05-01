import React from 'react';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = ({ alias, params }: WidgetUrlProps) => {
  const widgetUrl = getWidgetUrl(alias, params);

  return (
    <a
      href={widgetUrl}
      target='_blank'
      rel='noopener noreferrer'
    >
      {widgetUrl}
    </a>
  );
};

export default WidgetUrl;
