import { ReactElement } from 'react';

export type OnChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;
export type ParamType = 'string' | 'number';
export type ParamValue = string | number;
export type WidgetAlias = 'ct' | 'st' | 'sm' | 'rs';
export type PositionX = 'left' | 'center' | 'right';
export type PositionY = 'top' | 'middle' | 'right';
export type FlexPosition = 'flex-start' | 'center' | 'flex-end';
export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter';
export type FontStyle = 'normal' | 'italic';

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

export type WidgetComponent = ReactElement<ShorthandValues>;
