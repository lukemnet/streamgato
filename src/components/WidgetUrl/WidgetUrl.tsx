import React from 'react';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = ({ alias, params }: WidgetUrlProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>{alias} - Widget URL</h2>
    <div>
      {JSON.stringify(params)}
    </div>
  </div>
);

export default WidgetUrl;
