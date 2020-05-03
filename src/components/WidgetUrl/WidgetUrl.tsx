import React from 'react';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import ExternalLink from 'components/ExternalLink/ExternalLink';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  origin: string;
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = ({ origin, alias, params }: WidgetUrlProps) => {
  const widgetUrl = getWidgetUrl({ origin, alias, params });

  return (
    <ExternalLink
      href={widgetUrl}
      newWindow={true}
    >
      {widgetUrl}
    </ExternalLink>
  );
};

export default WidgetUrl;
