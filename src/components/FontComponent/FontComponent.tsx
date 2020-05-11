import React, { ReactElement } from 'react';
import OratorStd from 'fonts/OratorStd/OratorStd';

interface FontComponentProps {
  name?: string;
}

type FontComponents = {
  [key: string]: ReactElement;
}

const FontComponent = ({ name }: FontComponentProps) => {
  const fontComponents = {
    OratorStd: <OratorStd />
  } as FontComponents;

  const fontExists = name
    ? Object.keys(fontComponents).includes(name)
    : false;

  return fontExists
    ? fontComponents[name!]
    : null;
};

export default FontComponent;
