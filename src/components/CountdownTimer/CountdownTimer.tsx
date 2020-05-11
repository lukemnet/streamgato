import React from 'react';
import GenericTimer, { GenericTimerParams } from 'components/GenericTimer/GenericTimer';

interface GenericTimerProps {
  params: Partial<GenericTimerParams>;
}

const CountdownTimer =
  React.forwardRef(({ params }: GenericTimerProps, ref) => (
    <GenericTimer
      direction='backward'
      params={params}
      ref={ref}
    />
  ));

export default CountdownTimer;
