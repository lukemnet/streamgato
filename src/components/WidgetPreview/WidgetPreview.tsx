import React from 'react';
import CountdownTimerPreview from 'components/CountdownTimerPreview/CountdownTimerPreview';
import { GenericWidget, WidgetAlias, ShorthandValues } from 'types';

interface WidgetPreviewProps {
  alias: WidgetAlias;
  params: ShorthandValues;
}

type WidgetPreviewComponentList = {
  [key in WidgetAlias]: GenericWidget;
}

const WidgetPreview = ({ alias, params }: WidgetPreviewProps) => {
  const widgetPreviews = {
    ct: <CountdownTimerPreview params={params} />,
    st: <CountdownTimerPreview params={params} />,
    sm: <CountdownTimerPreview params={params} />,
    rs: <CountdownTimerPreview params={params} />,
  } as WidgetPreviewComponentList;

  return widgetPreviews[alias];
};

export default WidgetPreview;
