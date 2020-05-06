import React from 'react';
import { Button } from 'react-bootstrap';
import { FaCheck, FaCopy } from 'react-icons/fa';

interface CopyToClipboardButtonProps {
  disabled: boolean;
  copied: boolean;
}

const DefaultValue = () => (
  <>
    <FaCopy />
  </>
);

const CopiedValue = () => (
  <>
    <FaCheck />
    &nbsp;
    Copied!
  </>
);

const defaultTitle = 'Configure widget first!';
const readyToCopyTitle = 'Copy widget URL';

const CopyToClipboardButton = ({
  disabled,
  copied,
}: CopyToClipboardButtonProps) => (
  <Button
    {...disabled && {
      disabled,
      readOnly: true }}
    title={disabled
      ? defaultTitle
      : readyToCopyTitle}
    variant={copied
      ? 'success'
      : 'outline-secondary'}
  >
    {copied
      ? <CopiedValue />
      : <DefaultValue />
    }
  </Button>
);

export default CopyToClipboardButton;
