import React, { FocusEvent } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
// import WidgetUrl from 'components/WidgetUrl/WidgetUrl';
import { FaCopy } from 'react-icons/fa';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  alias: string;
  params: ShorthandValues;
}

const WidgetUrlSection = (props: WidgetUrlProps) => {
  const { alias, params } = props;
  const widgetUrl = getWidgetUrl(alias, params);
  const emptyParams = params && Object.keys(params).length <= 0;
  const onFocus =  (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div>
      <h2>Widget URL</h2>
      <div>
        <InputGroup className='mb-3'>
          <FormControl
            {...emptyParams && {
              disabled: true,
              title: 'Configure widget first',
            }}
            readOnly
            value={widgetUrl}
            onFocus={onFocus}
            aria-label='Widget URL'
          />
          <InputGroup.Append>
            <Button
              {...emptyParams && {
                disabled: true,
                readOnly: true }}
              title={emptyParams
                ? 'Configure widget first'
                : 'Copy widget URL'}
              variant='outline-secondary'
            >
              <FaCopy />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {/* <WidgetUrl {...props} /> */}
      </div>
    </div>
  );
};

export default WidgetUrlSection;
