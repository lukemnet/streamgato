import WidgetComponent from './WidgetComponent';
import domRender from 'utils/domRender';

const aliases = [
  'ct',
  'st',
  'sm',
  'rs',
];

it('renders correctly', () => {
  aliases.forEach(alias => {
    domRender(WidgetComponent, { alias });
  });
});
