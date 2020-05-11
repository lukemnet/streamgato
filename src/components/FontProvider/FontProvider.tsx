import React, { ReactElement } from 'react';
import FontComponent from 'components/FontComponent/FontComponent';

interface FontProviderProps {
  name?: string;
  children: ReactElement | ReactElement[];
}

const FontProvider = ({
  name,
  children,
}: FontProviderProps) => (
  <>
    <FontComponent name={name} />
    {children}
  </>
);

export default FontProvider;
