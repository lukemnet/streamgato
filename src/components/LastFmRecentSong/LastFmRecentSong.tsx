import React from 'react';
import { WidgetComponentProps } from 'types';

const LastFmRecentSong = ({ params }: WidgetComponentProps) => (
  <div>
    <p>LastFmRecentSong</p>
    <p>{JSON.stringify(params)}</p>
  </div>
);

export default LastFmRecentSong;
