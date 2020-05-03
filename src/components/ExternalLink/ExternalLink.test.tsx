import domRender from 'utils/domRender';
import ExternalLink from './ExternalLink';

const testProps = {
  href: 'https://example.org',
  newWindow: true,
};

it('renders correctly', () => {
  domRender(ExternalLink, testProps);
});
