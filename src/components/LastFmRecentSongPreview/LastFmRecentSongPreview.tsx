import React from 'react';
import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import { WidgetComponentProps } from 'types';

const LastFmRecentSongPreview = (props: WidgetComponentProps) => (
  <LastFmRecentSong {...props} />
);

export default LastFmRecentSongPreview;
