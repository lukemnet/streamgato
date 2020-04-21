import React from 'react';

interface WidgetProps {
  params: any;
}

const Widget = ({ params }: WidgetProps) => (
  <div style={{ overflow: "hidden" }}>
    <h2>Preview</h2>
    {JSON.stringify(params)}
  </div>
);

export default Widget;
