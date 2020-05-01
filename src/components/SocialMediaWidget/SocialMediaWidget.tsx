import React from 'react';
import { WidgetComponentProps } from 'types';

const SocialMediaWidget = ({ params }: WidgetComponentProps) => (
  <div>
    <p>SocialMediaWidget</p>
    <p>{JSON.stringify(params)}</p>
  </div>
);

export default SocialMediaWidget;
