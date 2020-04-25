import widgets from './widgets';

it('should match snapshot', () => {
  expect(widgets).toMatchSnapshot();
});