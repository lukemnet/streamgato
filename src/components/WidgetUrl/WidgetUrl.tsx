import React from 'react';

interface WidgetProps {
  params: any;
}

const WidgetUrl = ({ params }: WidgetProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>Widget URL</h2>
    {JSON.stringify(params)}
  </div>
);

export default WidgetUrl;
