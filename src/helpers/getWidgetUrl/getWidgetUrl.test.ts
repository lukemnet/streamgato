import getWidgetUrl from './getWidgetUrl';

const testParams = {
  origin: 'http://example.org',
  alias: 'sm',
  params: {
    h: 1,
    m: 2,
    s: 3,
  },
};

it('should construct widget URL', () => {
  const { origin, alias, params } = testParams;
  expect(getWidgetUrl({ origin, alias, params })).toMatchSnapshot();
});
