
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy function', () => {
  it('should return the correct string for argument true', () => {
    const copyForTrue = 'All rights reserved ©';
    expect(getFooterCopy(true)).toEqual(copyForTrue);
  });

  it('should return the correct string for argument false', () => {
    const copyForFalse = 'Visit us at www.example.com';
    expect(getFooterCopy(false)).toEqual(copyForFalse);
  });
});

describe('getLatestNotification function', () => {
  it('should return the correct string', () => {
    const expectedNotification =
      '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(expectedNotification);
  });
});
