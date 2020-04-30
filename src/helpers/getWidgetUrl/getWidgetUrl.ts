import constructURLparams from 'helpers/constructURLparams/constructURLparams';
import { ShorthandValues } from 'types';

const getWidgetUrl = (alias: string, params: ShorthandValues) => {
  const { protocol, host } = window.location;
  const URLparams = constructURLparams(params);
  return `${protocol}//${host}/${alias}${URLparams}`;
}

export default getWidgetUrl;
