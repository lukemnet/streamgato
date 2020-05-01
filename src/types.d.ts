import { ReactElement } from "react";

export type OnChangeFn = (e: ChangeEvent<HTMLInputElement>) => void;
export type ParamType = "string" | "number"
export type ParamValue = string | number;

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

export type WidgetAlias = 'ct' | 'st' | 'sm' | 'rs';

export interface WidgetComponentProps {
  params: ShorthandValues;
};

export type WidgetComponent = ReactElement<ShorthandValues>;
