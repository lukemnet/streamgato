import React from 'react';
import GenericTimer, { GenericTimerParams } from 'components/GenericTimer/GenericTimer';

interface StreamTimerProps {
  params: Partial<GenericTimerParams>;
}

const StreamTimer =
  React.forwardRef(({ params }: StreamTimerProps, ref) => (
    <GenericTimer
      direction='forward'
      params={params}
      ref={ref}
    />
  ));

export default StreamTimer;
