import isItPreviewUrl from './isItPreviewUrl';

const previewUrls = [
  'http://localhost:3000',
  'http://test.lukem.net',
  'http://test.netlify.app',
];

const nonPreviewUrls = [
  'http://streamgato.com',
  'http://www.streamgato.com',
  'http://strmgt.com',
  'http://www.strmgt.com',
];

it('returns true for preview urls', () => {
  previewUrls.forEach(url => {
    expect(isItPreviewUrl(url)).toBe(true);
  });
});

it('returns false for production urls', () => {
  nonPreviewUrls.forEach(url => {
    expect(isItPreviewUrl(url)).toBe(false);
  });
});
