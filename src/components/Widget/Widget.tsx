import React from 'react';

export interface WidgetParam {
  [key: string]: string | number;
}
interface WidgetProps {
  alias: string;
  params: WidgetParam;
}

const Widget = ({ alias, params }: WidgetProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>{alias} - Widget</h2>
    <div style={{ overflow: "hidden" }}>
      {JSON.stringify(params)}
    </div>
  </div>
);

export default Widget;
