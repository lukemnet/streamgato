import { FocusEvent } from 'react';

const selectInputText = (e: FocusEvent<HTMLInputElement>) => {
  e.target.select();
};

export default selectInputText;
