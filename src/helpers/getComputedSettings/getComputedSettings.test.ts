import getComputedSettings from './getComputedSettings';
import { ShorthandValues } from 'types';

const testSettings = {
  h: 1,
  m: 2,
  s: 3,
} as ShorthandValues;

const defaultSettings = {
  h: 2,
  m: 2,
  s: 3,
} as ShorthandValues;

it('should compute settings correctly', () => {
  expect(getComputedSettings(testSettings, defaultSettings)).toMatchSnapshot();
})