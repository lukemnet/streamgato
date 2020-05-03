import React from 'react';
import { WidgetComponentProps } from 'types';
import Timer from 'react-compound-timer';
import addLeadingZeros from 'helpers/addLeadingZeros/addLeadingZeros';

const StreamTimer = ({ params }: WidgetComponentProps) => (
  <div>
    <p>StreamTimer</p>
    <p>{JSON.stringify(params)}</p>
    <Timer
      lastUnit='h'
      direction='forward'
      formatValue={addLeadingZeros}
    >
      {() => (
        <>
          <Timer.Hours />:
          <Timer.Minutes />:
          <Timer.Seconds />
        </>
      )}
    </Timer>
  </div>
);

export default StreamTimer;
