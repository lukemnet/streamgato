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
              type={field.type === "string" ? "text" : "number"}
              name={fieldName}
              onChange={onChange}
              value={field.value}
            />
          </div>
        );
      })}
    </form>
);
}

export default ConfigForm;
