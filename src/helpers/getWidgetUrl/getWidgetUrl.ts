import constructURLparams from 'helpers/constructURLparams/constructURLparams';
import getWidgetOrigin from 'helpers/getWidgetOrigin/getWidgetOrigin';
import { ShorthandValues } from 'types';

interface GetWidgetUrlParams {
  origin: string;
  alias: string;
  params?: ShorthandValues;
}

const getWidgetUrl = ({
  origin,
  alias,
  params,
}: GetWidgetUrlParams) => {
  const widgetOrigin = getWidgetOrigin(origin);
  const urlParams = constructURLparams(params);
  return `${widgetOrigin}/${alias}${urlParams}`;
};

export default getWidgetUrl;
