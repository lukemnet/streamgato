import CopyToClipboardButton from './CopyToClipboardButton';
import domRender from 'utils/domRender';

it('renders correctly', () => {
  [ true, false ].forEach(disabled => {
    [ true, false ].forEach(copied => {
      domRender(CopyToClipboardButton, { disabled, copied });
    });
  });
});
