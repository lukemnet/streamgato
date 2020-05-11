import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
import { WidgetComponentProps } from 'types';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';

// interface TimerElement extends HTMLDivElement {
//   setTime: (time: number) => void;
//   reset: () => void;
//   start: () => void;
//   props: {
//     initialTime: number;
//   };
// }

const CountdownTimerPreview = ({ params }: WidgetComponentProps) => {
  const ref = useRef<any>(null);
  const [ widgetParams, setWidgetParams ] = useState(params);

  useEffect(() => {
    const { h, m, s } = params as { [key:string]: number };
    const newTime = convertToMiliseconds({ h, m, s });

    setWidgetParams(params);

    const timer = ref.current!;
    const oldTime = timer?.props.initialTime;

    if (timer && newTime !== oldTime) {
      timer.setTime(newTime);
      timer.reset();
      timer.start();
    }
  }, [params, ref]);

  return (
    <CountdownTimer
      params={widgetParams}
      ref={ref}
    />
  );
};

export default CountdownTimerPreview;
