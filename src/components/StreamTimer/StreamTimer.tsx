import React from 'react';
import { WidgetComponentProps } from 'types';

const StreamTimer = ({ params }: WidgetComponentProps) => {
  console.log(params);
  return (
    <div>
      <p>StreamTimer</p>
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}

export default StreamTimer;
