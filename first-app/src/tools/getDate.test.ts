import { getFormattedDate } from './getDate';

describe('Function getDate', () => {
  it('Date was formatted properly', () => {
    const date = '2017-01-04T18:48:46.250Z';
    const result = '04-01-2017';
    expect(getFormattedDate(date)).toEqual(result);
  });
});
