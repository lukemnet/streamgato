import React from 'react';
import { OnChangeFn, ParamValue } from 'types';

interface NumberInputProps {
  name: string;
  onChange: OnChangeFn;
  value: ParamValue;
  min?: number;
  max?: number;
}

const NumberInput = ({
  name,
  ...props
}: NumberInputProps) => (
  <input
    type="number"
    id={name}
    {...props}
  />
);

export default NumberInput;
