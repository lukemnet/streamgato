import React from 'react';
import { ShorthandValues } from 'types';

interface CountdownTimerProps {
  params: ShorthandValues;
}

const CountdownTimer = ({ params }: CountdownTimerProps) => (
  <div>
    <p>CountdownTimer</p>
    <p>{JSON.stringify(params)}</p>
  </div>
);

export default CountdownTimer;
