beforeEach(() => {
  delete process.env.REACT_APP_WIDGET_ORIGIN;
  jest.resetModules();
});

it('should match snapshot with widget origin from env variable', () => {
  const config = require('./config');
  process.env.REACT_APP_WIDGET_ORIGIN = 'http://test.streamgato.com';
  expect(config).toMatchSnapshot();
});

it('should match snapshot when no origin is present in env variables', () => {
  const config = require('./config');
  process.env.REACT_APP_WIDGET_ORIGIN = undefined;
  expect(config).toMatchSnapshot();
});
