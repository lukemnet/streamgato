import getWidgetOrigin from './getWidgetOrigin';

const testPreviewOrigins = [
  'http://localhost:3000',
  'http://streamgato.lukem.net',
  'http://test.netlify.app'
];

const testNonPreviewOrigins = [
  'http://streamgato.com',
  'http://www.streamgato.com',
  'http://strmgt.com',
  'http://www.strmgt.com',
];

it('returns correct widget origin for a production URL', () => {
  delete window.location;

  testPreviewOrigins.forEach(origin => {
    window.location = {
      origin,
    } as any;

    expect(getWidgetOrigin(origin)).toMatchSnapshot();
  });
});

it('returns correct widget origin for a production URL', () => {
  delete window.location;

  testNonPreviewOrigins.forEach(origin => {
    window.location = {
      origin,
    } as any;

    expect(getWidgetOrigin(origin)).toMatchSnapshot();
  });
});
