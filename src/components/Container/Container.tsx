import React, { ReactElement } from 'react';
import { Container as BootstrapContainer } from 'react-bootstrap';

interface ContainerProps {
  children: ReactElement | ReactElement[];
}

const Container = ({ children }: ContainerProps) => (
  <BootstrapContainer fluid='xl'>
    {children}
  </BootstrapContainer>
);

export default Container;
