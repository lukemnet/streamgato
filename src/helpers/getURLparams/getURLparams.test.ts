import getURLparams from './getURLparams';

it('should create correct param object', () => {
  delete window.location;
  (window.location as any) = { search: "?pt=5&pl=5&pb=10" };

  expect(getURLparams()).toMatchSnapshot();
});

it('should return empty param object when no search params are present', () => {
  delete window.location;
  (window.location as any) = { search: "" };

  expect(getURLparams()).toMatchSnapshot();
})