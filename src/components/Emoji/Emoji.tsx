import React from 'react';

interface EmojiProps {
  label: string;
  value: string;
}

const Emoji = ({ label, value }: EmojiProps) => (
  <span
    role='img'
    aria-label={label}
  >
    {value}
  </span>
);

export default Emoji;
