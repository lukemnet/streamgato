import React from 'react';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import { WidgetComponentProps } from 'types';
// import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';

// interface TimerElement extends HTMLDivElement {
//   setTime: (time: number) => void;
//   reset: () => void;
//   start: () => void;
//   props: {
//     initialTime: number;
//   };
// }

const StreamTimerPreview = ({ params }: WidgetComponentProps) => {
  return (
    <StreamTimer
      params={params}
      // ref={ref}
    />
  );
};

export default StreamTimerPreview;
