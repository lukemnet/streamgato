import WidgetPreviewSection from './WidgetPreviewSection';
import domRender from 'utils/domRender';

const testParams = {
  alias: 'st',
  params: {
    h: 1,
    m: 2,
    s: 3,
  }
};

it('renders correctly', () => {
  domRender(WidgetPreviewSection, testParams);
});
