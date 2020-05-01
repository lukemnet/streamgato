import React from 'react';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import ExternalLink from 'components/ExternalLink/ExternalLink';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = ({ alias, params }: WidgetUrlProps) => {
  const widgetUrl = getWidgetUrl(alias, params);

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
