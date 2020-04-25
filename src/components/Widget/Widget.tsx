import React from 'react';

export interface WidgetParam {
  shorthand: string;
  value: string | number;
}
interface WidgetProps {
  params: WidgetParam[];
}

const Widget = ({ params }: WidgetProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>Widget</h2>
    {params.map(param => (
      <div>{param.shorthand}: {param.value}</div>
    ))}
  </div>
);

export default Widget;
