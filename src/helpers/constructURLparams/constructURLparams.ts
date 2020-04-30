import { ShorthandValues } from 'types';

const constructURLparams = (params: ShorthandValues) =>
  Object.keys(params).length > 0
    ? `?${Object.keys(params).map(key =>
      `${key}=${encodeURIComponent(params[key])}`)
      .join('&')}`
    : "";

export default constructURLparams;
