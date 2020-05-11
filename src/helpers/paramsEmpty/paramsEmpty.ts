import { ShorthandValues } from 'types';

const paramsEmpty = (params: ShorthandValues) =>
  params && Object.keys(params).length <= 0;

export default paramsEmpty;
