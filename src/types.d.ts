import { ReactElement, MutableRefObject } from 'react';
import Timer from 'react-compound-timer';

export type TimerRef = MutableRefObject<Timer>;
export type OnChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;
export type ParamType =
  'string'
  | 'number';
export type ParamValue =
  string |
  number;
export type WidgetAlias =
  'ct'
  | 'st'
  | 'sm'
  | 'rs';
export type PositionX =
  'left'
  | 'center'
  | 'right';
export type PositionY =
  'top'
  | 'middle'
  | 'right';
export type FlexPosition =
  'flex-start'
  | 'center'
  | 'flex-end';
export type FontWeight =
  'normal'
  | 'bold'
  | 'bolder'
  | 'lighter';
export type FontStyle =
  'normal'
  | 'italic';
export type BorderStyle =
  'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'none';

export type WidgetListObject = {
  [key in WidgetAlias]: GenericWidget;
}

export interface WidgetParam {
  type: ParamType;
  label: string;
  shorthand: string;
  info?: string;
  value: ParamValue;
  min?: number;
  max?: number;
}

export interface WidgetParams {
  [key:string]: WidgetParam;
}

export interface ShorthandValues {
  [key:string]: ParamValue;
}

export interface Widget {
  name: string;
  route: string;
  alias: WidgetAlias;
  params: WidgetParams;
}

export interface WidgetComponentProps {
  params: ShorthandValues;
};

export interface GenericWidgetComponentProps extends WidgetComponentProps {
  alias: WidgetAlias;
};

export type GenericWidget = ReactElement<ShorthandValues>;
