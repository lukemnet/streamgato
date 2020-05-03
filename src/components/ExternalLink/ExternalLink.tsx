import React from 'react';

interface NewTabLinkProps {
  href: string;
  newWindow?: boolean;
  children: string;
}

const ExternalLink = ({ href, children, newWindow }: NewTabLinkProps) => (
  <a
    href={href}
    {...newWindow && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }}
  >
    {children}
  </a>
);

export default ExternalLink;
