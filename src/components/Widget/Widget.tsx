import React from 'react';

export interface WidgetParam {
  shorthand: string;
  value: string | number;
}
interface WidgetProps {
  alias: string;
  params: WidgetParam[];
}

const Widget = ({ alias, params }: WidgetProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>{alias} - Widget</h2>
    {params.map((param, key) => (
      <div key={key}>{param.shorthand}: {param.value}</div>
    ))}
  </div>
);

export default Widget;
