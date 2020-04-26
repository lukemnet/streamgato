import React from 'react';
import getShorthandValues from 'helpers/getShorthandValues/getShorthandValues';

interface DefaultSettings {
  [key: string]: string | number;
}

export interface WidgetParam {
  shorthand: string;
  value: string | number;
}
interface WidgetProps {
  alias: string;
  params: WidgetParam[];
  defaultSettings: DefaultSettings;
}

const Widget = ({ alias, params, defaultSettings }: WidgetProps) => {
  const settings = getShorthandValues(params);

  return (
    <div style={{ overflow: "hidden" }}>
      <h2>{alias} - Widget</h2>
      <div style={{ overflow: "hidden" }}>
        {JSON.stringify(settings)}
      </div>
      <div style={{ overflow: "hidden" }}>
        {JSON.stringify(defaultSettings)}
      </div>
      {/* <div>
        {params.map((param, key) => (
          <div key={key}>{param.shorthand}: {param.value}</div>
        ))}
      </div>
      <div style={{ overflow: "hidden" }}>
        <h2>Default settings</h2>
        <div style={{ overflow: "hidden" }}>
          {shorthands.map((shorthand, key) => (
            <div key={key}>{shorthand}: {defaultSettings[shorthand]}</div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Widget;
