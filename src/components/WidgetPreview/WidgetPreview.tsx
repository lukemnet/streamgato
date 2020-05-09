import React from 'react';
import CountdownTimerPreview from 'components/CountdownTimerPreview/CountdownTimerPreview';
import { WidgetAlias, ShorthandValues } from 'types';

interface WidgetPreviewProps {
  alias: WidgetAlias;
  params: ShorthandValues;
}

const WidgetPreview = ({ alias, params }: WidgetPreviewProps) => {
  switch (alias) {
  case 'ct':
    return <CountdownTimerPreview params={params} />;
  case 'st':
    return <CountdownTimerPreview params={params} />;
  case 'sm':
    return <CountdownTimerPreview params={params} />;
  case 'rs':
    return <CountdownTimerPreview params={params} />;
  }
};

export default WidgetPreview;
