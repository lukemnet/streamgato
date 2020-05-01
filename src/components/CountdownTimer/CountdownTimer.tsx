import React from 'react';
import { ShorthandValues } from 'types';
import Timer from 'react-compound-timer';
import convertToMiliseconds, { CountdownTimerParams } from 'helpers/convertToMiliseconds/convertToMiliseconds';
import addLeadingZeros from 'helpers/addLeadingZeros/addLeadingZeros';

interface CountdownTimerProps {
  params: ShorthandValues;
}

const CountdownTimer = ({ params }: CountdownTimerProps) => {
  const { h, m, s } = params as unknown as CountdownTimerParams;
  const initialTime = convertToMiliseconds({ h, m, s });
  return (
    <div>
      <p>CountdownTimer</p>
      <p>{JSON.stringify(params)}</p>
      <Timer
        initialTime={initialTime}
        lastUnit='h'
        direction='backward'
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
};

export default CountdownTimer;
