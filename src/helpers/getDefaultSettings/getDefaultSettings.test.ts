import getDefaultSettings from './getDefaultSettings';
import { WidgetParams } from 'types';

const testParams = {
  hours: {
    type: "number",
    label: "Hours",
    shorthand: "h",
    value: 0,
    min: 0,
  },
  minutes: {
    type: "number",
    label: "Minutes",
    shorthand: "m",
    value: 0,
    min: 0,
    max: 59,
    info: "0 to 59"
  },
  seconds: {
    type: "number",
    label: "Seconds",
    shorthand: "s",
    value: 0,
    min: 0,
    max: 59,
    info: "0 to 59",
  },
  background: {
    type: "string",
    label: "Background color",
    shorthand: "bg",
    value: "#000000",
    info: "Hex, RGB or RGBA. 'transparent' for no color"
  },
  color: {
    type: "string",
    label: "Text color",
    shorthand: "col",
    value: "#ffffff",
    info: "Hex, RGB or RGBA"
  }
} as WidgetParams;

it('should create default settings object', () => {
  expect(getDefaultSettings(testParams)).toMatchSnapshot();
})