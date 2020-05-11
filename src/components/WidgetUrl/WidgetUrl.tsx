import React, { useState, useEffect } from 'react';
import {
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import CopyToClipboardWrapper from 'components/CopyToClipboardWrapper/CopyToClipboardWrapper';
import CopyToClipboardButton from 'components/CopyToClipboardButton/CopyToClipboardButton';
import areParamsEmpty from 'helpers/paramsEmpty/paramsEmpty';
import getWidgetUrl from 'helpers/getWidgetUrl/getWidgetUrl';
import selectInputText from 'helpers/selectInputText/selectInputText';
import { ShorthandValues } from 'types';

interface WidgetUrlProps {
  origin: string;
  alias: string;
  params: ShorthandValues;
}

const WidgetUrl = (props: WidgetUrlProps) => {
  const { params } = props;
  const widgetUrl = getWidgetUrl(props);
  const disabled = areParamsEmpty(params);
  const [ copied, setCopied ] = useState(false);
  const onCopy = () => !disabled && setCopied(true);

  useEffect(() => {
    setCopied(false);
  }, [widgetUrl]);

  return (
    <CopyToClipboardWrapper
      disabled={disabled}
      text={widgetUrl}
      onCopy={onCopy}
    >
      <InputGroup
        {...disabled && {
          title: 'Configure widget first!',
        }}
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
              copied,
            }}
          />
        </InputGroup.Append>
      </InputGroup>
    </CopyToClipboardWrapper>
  );
};

export default WidgetUrl;
