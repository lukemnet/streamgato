import React, { useEffect, useRef } from 'react';
import StreamTimer from 'components/StreamTimer/StreamTimer';
import { WidgetComponentProps } from 'types';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';

interface TimerElement extends HTMLDivElement {
  setTime: (time: number) => void;
  reset: () => void;
  start: () => void;
  props: {
    initialTime: number;
  };
}

const StreamTimerPreview = ({ params }: WidgetComponentProps) => {
  const ref = useRef<TimerElement>(null);

  useEffect(() => {
    const timer = ref.current!;
    const oldTime = timer?.props.initialTime;
    const { h, m, s } = params as { [key:string]: number };
    const newTime = convertToMiliseconds({ h, m, s });

    if (timer && newTime !== oldTime) {
      timer.setTime(newTime);
      timer.reset();
      timer.start();
    }
  }, [params, ref]);

  return (
    <StreamTimer
      params={params}
      // ref={ref}
    />
  );
};

export default StreamTimerPreview;
