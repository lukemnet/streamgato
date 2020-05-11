import CountdownTimerPreview from './CountdownTimerPreview';
import domRender from 'utils/domRender';

const testParams = {
  params: {
    h: 1,
    m: 2,
    s: 3,
  }
};

it('renders correctly', () => {
  domRender(CountdownTimerPreview, testParams);
});
