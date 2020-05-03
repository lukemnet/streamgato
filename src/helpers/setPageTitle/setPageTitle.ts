import { metadata } from 'config/config';

const setPageTitle = (title: string | undefined) => {
  document.title = title
    ? `${title} | ${metadata.title}`
    : metadata.title;
};

export default setPageTitle;
