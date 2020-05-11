import StreamTimerPreview from './StreamTimerPreview';
import domRender from 'utils/domRender';

const testParams = {
  col: 'red',
  w: 12,
  ta: 'left',
};

it('renders correctly', () => {
  domRender(StreamTimerPreview, testParams);
});
