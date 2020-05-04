import paramsNotEmpty from 'helpers/paramsNotEmpty/paramsNotEmpty';
import { ShorthandValues } from 'types';

const constructURLparams = (params?: ShorthandValues) =>
  params
    ? paramsNotEmpty(params)
      ? `?${Object.keys(params).map(key =>
        `${key}=${encodeURIComponent(params[key])}`)
        .join('&')}`
      : ''
    : '';

export default constructURLparams;
