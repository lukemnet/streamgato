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
  alias: string;
  params: WidgetParams;
}
