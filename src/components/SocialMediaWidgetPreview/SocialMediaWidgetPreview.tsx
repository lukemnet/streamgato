import React from 'react';
import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
import { WidgetComponentProps } from 'types';

const SocialMediaWidgetPreview = (props: WidgetComponentProps) => (
  <SocialMediaWidget {...props} />
);

export default SocialMediaWidgetPreview;
