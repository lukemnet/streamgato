import constructURLparams from 'helpers/constructURLparams/constructURLparams';
import getWidgetOrigin from 'helpers/getWidgetOrigin/getWidgetOrigin';
import { ShorthandValues } from 'types';

interface GetWidgetUrlParams {
  origin: string;
  alias: string;
  params: ShorthandValues;
}

const getWidgetUrl = ({
  origin,
  alias,
  params,
}: Partial<GetWidgetUrlParams>) => {
  const widgetOrigin = getWidgetOrigin(origin);
  const urlParams = params
    ? constructURLparams(params)
    : undefined;
  return `${widgetOrigin}/${alias}${urlParams}`;
};

export default getWidgetUrl;
