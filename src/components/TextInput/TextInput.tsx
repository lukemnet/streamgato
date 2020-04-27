import React from 'react';
import { OnChangeFn, ParamValue } from 'types';

interface TextInputProps {
  name: string;
  onChange: OnChangeFn;
  value: ParamValue;
}

const TextInput = ({
  name,
  ...props
}: TextInputProps) => (
  <input
    type="text"
    id={name}
    {...props}
  />
);

export default TextInput;
