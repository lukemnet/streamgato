import metadata from './metadata/metadata.json';
import countdownTimer from './widgets/countdownTimer.json';
import streamTimer from './widgets/streamTimer.json';
import socialMediaWidget from './widgets/socialMediaWidget.json';
import lastfmRecentSong from './widgets/lastfmRecentSong.json';
import { Widget } from 'types';

const widgetOrigin =
  process.env.REACT_APP_WIDGET_ORIGIN
  || window.location.origin;

const widgets = [
  countdownTimer,
  streamTimer,
  socialMediaWidget,
  lastfmRecentSong,
] as Widget[];

const siteMetadata = {
  widgetOrigin,
  ...metadata,
};

export {
  siteMetadata as metadata,
  widgets,
};
