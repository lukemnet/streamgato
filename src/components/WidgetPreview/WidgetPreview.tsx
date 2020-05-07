import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import { ShorthandValues } from 'types';
import styles from './WidgetPreview.module.scss';

interface WidgetListObject {
  [key: string]: ReactElement;
}

interface WidgetPreviewProps {
  alias: string;
  params: ShorthandValues;
}

const cx = classnames.bind(styles);

const WidgetPreview = ({ alias, params }: WidgetPreviewProps) => {
  const widgets = {
    ct: <CountdownTimer params={params} />,
    st: <StreamTimer params={params} />,
    sm: <SocialMediaWidget params={params} />,
    rs: <LastFmRecentSong params={params} />,
  } as WidgetListObject;

  return (
    <div className={cx('WidgetPreview')}>
      {widgets[alias]}
    </div>
  );
};

export default WidgetPreview;
