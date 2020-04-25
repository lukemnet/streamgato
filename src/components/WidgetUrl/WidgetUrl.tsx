import React from 'react';
import { WidgetParam } from 'components/Widget/Widget';

interface WidgetUrlProps {
  params: WidgetParam[];
}

const WidgetUrl = ({ params }: WidgetUrlProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>Widget URL</h2>
    {params.map(param => (
      <div>{param.shorthand}: {param.value}</div>
    ))}
  </div>
);

export default WidgetUrl;
