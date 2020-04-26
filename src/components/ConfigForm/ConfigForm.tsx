import React, { ChangeEvent } from 'react';

export type onChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;

interface ConfigFormProps {
  params: any;
  onChange: onChangeFn;
}

const ConfigForm = ({
  params,
  onChange,
}: ConfigFormProps) => {
  const fieldNames = Object.keys(params);

  return (
    <form>
      {fieldNames.map((fieldName: any) => {
        const field = params[fieldName];
        return (
          <div key={fieldName}>
            <label>{field.label}</label>
            <input
              type="text"
              name={fieldName}
              onChange={onChange}
            />
          </div>
        );
      })}
    </form>
);
}

export default ConfigForm;
