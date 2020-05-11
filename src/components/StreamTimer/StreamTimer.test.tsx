import StreamTimer from './StreamTimer';
import domRender from 'utils/domRender';

const testParams = {
  params: {
    col: 'red',
    w: 12,
    ta: 'left',
  },
};

it('renders correctly', () => {
  domRender(StreamTimer, testParams);
});
