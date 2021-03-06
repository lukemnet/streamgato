import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
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
}: ConfigFormProps) => (
  <Form>
    {Object.keys(params).map((name) => {
      const fieldName = `${alias}_${name}`;
      const field = params[name];
      const {
        label,
        type,
        value,
        min,
        max,
        info,
      } = field;

      return (
        <Form.Group
          key={name}
          as={Row}
          controlId={fieldName}
        >
          <Form.Label
            column
            sm={4}
          >
            {label}
          </Form.Label>
          <Col sm={8}>
            {type === 'string' && (
              <Form.Control
                type='text'
                name={name}
                placeholder={value.toString()}
                onChange={onChange}
              />
            )}
            {type === 'number' && (
              <Form.Control
                type='number'
                name={name}
                placeholder={value.toString()}
                onChange={onChange}
                min={min}
                max={max}
              />
            )}
            <Form.Text className='text-muted'>
              {info}
            </Form.Text>
          </Col>
        </Form.Group>
      );
    })}
  </Form>
);

export default ConfigForm;
