import domRender from 'utils/domRender';
import FontComponent from './FontComponent';

const testParams = {
  name: 'OratorStd',
};

it('renders correctly', () => {
  domRender(FontComponent, testParams);
});
