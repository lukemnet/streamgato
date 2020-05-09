import React, { useEffect, useRef } from 'react';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import { ShorthandValues } from 'types';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';

interface WidgetPreviewProps {
  params: ShorthandValues;
}

interface TimerElement extends HTMLDivElement {
  setTime: (time: number) => void;
  reset: () => void;
  start: () => void;
  props: {
    initialTime: number;
  };
}

const CountdownTimerPreview = ({ params }: WidgetPreviewProps) => {
  const ref = useRef<TimerElement>(null);
  useEffect(() => {
    const timer = ref.current!;
    const oldTime = timer.props.initialTime;
    const { h, m, s } = params as { [key:string]: number };
    const newTime = convertToMiliseconds({ h, m, s });

    if (newTime !== oldTime) {
      timer.setTime(newTime);
      timer.reset();
      timer.start();
    }
  }, [params, ref]);

  return (
    <CountdownTimer
      params={params}
      ref={ref}
    />
  );
};

export default CountdownTimerPreview;
