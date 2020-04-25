import * as config from './config';

it('should match snapshot', () => {
  expect(config).toMatchSnapshot();
})
