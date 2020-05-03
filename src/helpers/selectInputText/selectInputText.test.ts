import { FocusEvent } from 'react';
import selectInputText from './selectInputText';

it('selects text in input', () => {
  const e = {
    target: {
      select: jest.fn(),
    },
  } as unknown as FocusEvent<HTMLInputElement>;

  selectInputText(e);
  expect(e.target.select).toHaveBeenCalled();
});
