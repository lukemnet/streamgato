const isItPreviewUrl = (origin: string) =>
  origin.includes('netlify')
  || origin.includes('lukem.net');

export default isItPreviewUrl;
