import React from 'react';
import getURLparams from 'helpers/getURLparams/getURLparams';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import { WidgetAlias, WidgetComponent } from 'types';
import { metadata } from 'config/config';

interface WidgetPageProps {
  alias: WidgetAlias;
  configRoute: string;
}

interface WidgetListObject {
  [key: string]: WidgetComponent;
}

const WidgetPage = ({ alias, configRoute }: WidgetPageProps) => {
  const params = getURLparams();

  if (Object.keys(params).length <= 0)
    window.location.replace(`${metadata.prodOrigin}${configRoute}`);

  const widgets = {
    ct: <CountdownTimer params={params} />,
    st: <StreamTimer params={params} />,
    sm: <SocialMediaWidget params={params} />,
    rs: <LastFmRecentSong params={params} />,
  } as WidgetListObject;

  return widgets[alias];
};

export default WidgetPage;
