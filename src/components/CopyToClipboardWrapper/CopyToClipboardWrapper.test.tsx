import React from 'react';
import CopyToClipboardWrapper from './CopyToClipboardWrapper';
import domRender from 'utils/domRender';

const testChild = <div>TestElement</div>;

const testProps = {
  text: 'Sample text',
  onCopy: () => null,
  children: testChild,
};

it('renders correctly for disabled set to true', () => {
  const props = {
    disabled: true,
    ...testProps,
  };

  domRender(CopyToClipboardWrapper, props, testChild);
});

it('renders correctly for disabled set to false', () => {
  const props = {
    disabled: false,
    ...testProps,
  };

  domRender(CopyToClipboardWrapper, props, testChild);
});
