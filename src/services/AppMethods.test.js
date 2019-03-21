import AppMethods from './AppMethods';
it('parseSearchParams showed return an object of parameters and there value ', () => {
  expect(
    AppMethods.parseSearchParams('?property1=value1&property2=value2')
  ).toEqual({
    property1: 'value1',
    property2: 'value2',
  });
  expect(AppMethods.parseSearchParams('')).toEqual({});
  expect(AppMethods.parseSearchParams(null)).toEqual({});
  expect(AppMethods.parseSearchParams(undefined)).toEqual({});
  expect(AppMethods.parseSearchParams('something')).toEqual({});
  expect(AppMethods.parseSearchParams('?something')).toEqual({});
});
