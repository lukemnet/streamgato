import React from 'react';
import { WidgetParam } from 'components/Widget/Widget';

interface WidgetUrlProps {
  alias: string;
  params: WidgetParam[];
}

const WidgetUrl = ({ alias, params }: WidgetUrlProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>{alias} - Widget URL</h2>
    {params.map((param, key) => (
      <div key={key}>{param.shorthand}: {param.value}</div>
    ))}
  </div>
);

export default WidgetUrl;
