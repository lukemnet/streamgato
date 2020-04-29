import React from 'react';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = ({ alias, params }: WidgetUrlProps) => {
  const widgetUrl = `${window.location.protocol}//${window.location.host}/${alias}`;

  return (
    <div style={{ overflow: "hidden" }}>
      <h2>Widget URL ({alias})</h2>
      <div>
        <a href={widgetUrl} target="_blank" rel="noopener noreferrer">{widgetUrl}</a>
      </div>
      <div>
        {JSON.stringify(params)}
      </div>
    </div>
  );
}

export default WidgetUrl;
