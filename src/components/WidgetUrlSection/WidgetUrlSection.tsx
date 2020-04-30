import React from 'react';
import WidgetUrl from 'components/WidgetUrl/WidgetUrl';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrlSection = (props: WidgetUrlProps) => {

  return (
    <div style={{ overflow: "hidden" }}>
      <h2>Widget URL</h2>
      <div>
        <WidgetUrl {...props} />
      </div>
    </div>
  );
}

export default WidgetUrlSection;
