import React, { useState, useEffect } from 'react';
import {
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import CopyToClipboardWrapper from 'components/CopyToClipboardWrapper/CopyToClipboardWrapper';
import CopyToClipboardButton from 'components/CopyToClipboardButton/CopyToClipboardButton';
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
  const disabled = params && Object.keys(params).length <= 0;
  const [ copied, setCopied ] = useState(false);
  const onCopy = () => !disabled && setCopied(true);

  useEffect(() => {
    setCopied(false);
  }, [widgetUrl]);

  return (
    <div>
      <h2>Widget URL</h2>
      <div>
        <CopyToClipboardWrapper
          disabled={disabled}
          text={widgetUrl}
          onCopy={onCopy}
        >
          <InputGroup
            className='mb-3'
            {...disabled && { title: 'Configure widget first!' }}
          >
            <FormControl
              disabled={disabled}
              readOnly
              value={widgetUrl}
              onFocus={selectInputText}
              aria-label='Widget URL'
            />
            <InputGroup.Append>
              <CopyToClipboardButton
                {...{
                  disabled,
                  copied
                }}
              />
            </InputGroup.Append>
          </InputGroup>
        </CopyToClipboardWrapper>
      </div>
    </div>
  );
};

export default WidgetUrlSection;
