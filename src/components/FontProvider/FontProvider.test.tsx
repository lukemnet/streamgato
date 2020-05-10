import domRender from 'utils/domRender';
import FontProvider from './FontProvider';

const testParams = {
  name: 'OratorStd',
};

it('renders correctly', () => {
  domRender(FontProvider, testParams);
});
