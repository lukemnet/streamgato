import paramsEmpty from 'helpers/paramsEmpty/paramsEmpty';
import { ShorthandValues } from 'types';

const paramsNotEmpty = (params: ShorthandValues) =>
  !paramsEmpty(params);

export default paramsNotEmpty;
