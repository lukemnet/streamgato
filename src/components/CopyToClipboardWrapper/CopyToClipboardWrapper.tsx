import React, { ReactElement } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface CopyToClipboardWrapperProps {
  disabled: boolean;
  text: string;
  onCopy: () => void;
  children: ReactElement;
}

const CopyToClipboardWrapper = ({
  disabled,
  text,
  onCopy,
  children,
}: CopyToClipboardWrapperProps) =>
  disabled
    ? (
      <>
        {children}
      </>
    )
    : (
      <CopyToClipboard
        text={text}
        onCopy={onCopy}
      >
        {children}
      </CopyToClipboard>
    );

export default CopyToClipboardWrapper;
