import isItPreviewUrl from 'helpers/isItPreviewUrl/isItPreviewUrl';

const getWidgetOrigin = (origin?: string) => {
  const widgetOrigin = origin
    ? origin
    : window.location.origin;

  return isItPreviewUrl(widgetOrigin)
    ? window.location.origin
    : origin;
};

export default getWidgetOrigin;
