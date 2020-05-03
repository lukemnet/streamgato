import { metadata } from 'config/config';

const isItPreviewUrl = (url: string) =>
  metadata.previewUrlComponents.some(urlComponent =>
    url.includes(urlComponent) || false
  );

export default isItPreviewUrl;
