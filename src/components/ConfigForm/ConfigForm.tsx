import React from 'react';
import TextInput from 'components/TextInput/TextInput';
import NumberInput from 'components/NumberInput/NumberInput';
import { WidgetParams, OnChangeFn } from 'types';

export interface ConfigFormProps {
  alias: string;
  params: WidgetParams;
  onChange: OnChangeFn;
}

const ConfigForm = ({
  alias,
  params,
  onChange,
}: ConfigFormProps) => {
  const fieldNames = Object.keys(params);

  return (
    <form>
      {fieldNames.map((name) => {
        const field = params[name];
        const {
          label,
          type,
          value,
          min,
          max,
        } = field;
        const fieldName = `${alias}_${name}`;
        return (
          <div key={fieldName}>
            <label htmlFor={fieldName}>
              {label}
            </label>
            {type === "string" && (
              <TextInput
                {...{
                  name: fieldName,
                  onChange,
                  value,
                }}
              />
            )}
            {type === "number" && (
              <NumberInput
                {...{
                  name: fieldName,
                  onChange,
                  value,
                  min,
                  max,
                }}
              />
            )}
          </div>
        );
      })}
    </form>
);
}

export default ConfigForm;
