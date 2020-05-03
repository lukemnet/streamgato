import isItPreviewUrl from 'helpers/isItPreviewUrl/isItPreviewUrl';

const getWidgetOrigin = (origin: string) => {
  const siteUrl = window.location.origin;

  return isItPreviewUrl(siteUrl)
    ? siteUrl
    : origin;
};

export default getWidgetOrigin;
