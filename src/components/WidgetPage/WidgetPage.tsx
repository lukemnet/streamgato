import React from 'react';
import getURLparams from 'helpers/getURLparams/getURLparams';

interface WidgetPageProps {
  alias: string;
}

const WidgetPage = ({ alias }: WidgetPageProps) => {
  const params = getURLparams();
  return (
    <div>
      <p>WidgetPage</p>
      <p>{alias}</p>
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}

export default WidgetPage;
