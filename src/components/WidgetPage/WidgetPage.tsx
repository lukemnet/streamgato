import React from 'react';

interface WidgetPageProps {
  alias: string;
}

const WidgetPage = ({ alias }: WidgetPageProps) => {
  // const urlParams
  return (
    <div>
      <p>WidgetPage</p>
      <p>{alias}</p>
    </div>
  );
}

export default WidgetPage;
