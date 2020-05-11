import React from 'react';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import {
  WidgetListObject,
  GenericWidgetComponentProps,
} from 'types';

const WidgetComponent = ({
  alias,
  params,
}: GenericWidgetComponentProps) => {
  const widgets = {
    ct: <CountdownTimer params={params} />,
    st: <StreamTimer params={params} />,
    sm: <SocialMediaWidget params={params} />,
    rs: <LastFmRecentSong params={params} />,
  } as WidgetListObject;

  return widgets[alias];
};

export default WidgetComponent;
