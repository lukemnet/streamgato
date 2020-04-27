import metadata from './metadata/metadata.json';
import countdownTimer from './widgets/countdownTimer.json';
import streamTimer from './widgets/streamTimer.json';
import socialMediaWidget from './widgets/socialMediaWidget.json';
import lastfmRecentSong from './widgets/lastfmRecentSong.json';
import { Widget } from 'types';

const widgets = [
  countdownTimer,
  streamTimer,
  socialMediaWidget,
  lastfmRecentSong,
] as Widget[];

export { 
  metadata,
  widgets,
};
