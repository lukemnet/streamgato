import domRender from 'utils/domRender';
import Emoji from './Emoji';

const testProps = {
  value: '😀',
  label: 'grinning face',
};

it('renders correctly', () => {
  domRender(Emoji, testProps);
});
