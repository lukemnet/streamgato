import getWidgetUrl from './getWidgetUrl';

const testParams = {
  alias: 'sm',
  params: {
    h: 1,
    m: 2,
    s: 3,
  },
};

it('should construct widget URL', () => {
  expect(getWidgetUrl(testParams.alias, testParams.params)).toMatchSnapshot();
});