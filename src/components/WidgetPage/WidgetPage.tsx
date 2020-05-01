import React from 'react';
import getURLparams from 'helpers/getURLparams/getURLparams';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import { WidgetAlias, WidgetComponent } from 'types';

interface WidgetPageProps {
  alias: WidgetAlias;
}

interface WidgetListObject {
  [key: string]: WidgetComponent;
}

const WidgetPage = ({ alias }: WidgetPageProps) => {
  const params = getURLparams();
  const widgets = {
    ct: <CountdownTimer params={params} />,
    st: <StreamTimer params={params} />,
    sm: <SocialMediaWidget params={params} />,
    rs: <LastFmRecentSong params={params} />,
  } as WidgetListObject;

  return widgets[alias];
};

export default WidgetPage;
