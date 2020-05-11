import React from 'react';
import CountdownTimerPreview from 'components/CountdownTimerPreview/CountdownTimerPreview';
import StreamTimerPreview from 'components/StreamTimerPreview/StreamTimerPreview';
import SocialMediaWidgetPreview from 'components/SocialMediaWidgetPreview/SocialMediaWidgetPreview';
import LastFmRecentSongPreview from 'components/LastFmRecentSongPreview/LastFmRecentSongPreview';
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
    st: <StreamTimerPreview params={params} />,
    sm: <SocialMediaWidgetPreview params={params} />,
    rs: <LastFmRecentSongPreview params={params} />,
  } as WidgetPreviewComponentList;

  return widgetPreviews[alias];
};

export default WidgetPreview;
