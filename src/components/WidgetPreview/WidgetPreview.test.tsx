import WidgetPreview from './WidgetPreview';
import domRender from 'utils/domRender';

const testParams = {
  alias: 'test',
  params: {
    h: 1,
    m: 2,
    s: 3,
  }
};

it('renders correctly', () => {
  domRender(WidgetPreview, testParams);
});