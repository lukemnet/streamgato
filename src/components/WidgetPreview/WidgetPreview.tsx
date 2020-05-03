import React from 'react';
import { ShorthandValues } from 'types';

interface WidgetProps {
  alias: string;
  params: ShorthandValues;
}

const Widget = ({ alias, params }: WidgetProps) => (
  <div style={{ overflow: 'hidden' }}>
    <h2>Widget preview ({alias})</h2>
    <div style={{ overflow: 'hidden' }}>
      {JSON.stringify(params)}
    </div>
  </div>
);

export default Widget;
