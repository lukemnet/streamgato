import React from 'react';
import getURLparams from 'helpers/getURLparams/getURLparams';
import WidgetComponent from 'components/WidgetComponent/WidgetComponent';
import paramsEmpty from 'helpers/paramsEmpty/paramsEmpty';
import { WidgetAlias } from 'types';

interface WidgetPageProps {
  alias: WidgetAlias;
  configRoute: string;
}

const WidgetPage = ({ alias, configRoute }: WidgetPageProps) => {
  const params = getURLparams();

  if (paramsEmpty(params))
    window.location.replace(configRoute);

  return (
    <WidgetComponent
      alias={alias}
      params={params}
    />
  );
};

export default WidgetPage;
