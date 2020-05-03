import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
// import WidgetUrl from 'components/WidgetUrl/WidgetUrl';
import { FaCopy } from 'react-icons/fa';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import selectInputText from 'helpers/selectInputText/selectInputText';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  origin: string;
  alias: string;
  params: ShorthandValues;
}

const WidgetUrlSection = (props: WidgetUrlProps) => {
  const { origin, alias, params } = props;
  const widgetUrl = getWidgetUrl({ origin, alias, params });
  const emptyParams = params && Object.keys(params).length <= 0;

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
            onFocus={selectInputText}
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
