import { RelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  let pipe: RelativeTimePipe;

  beforeEach(() => {
    pipe = new RelativeTimePipe();
  });

  it('should display 1 second ago', () => {
    const unixTimeDiff = 1;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 second ago');
  });

  it('should display 30 seconds ago', () => {
    const unixTimeDiff = 30;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('30 seconds ago');
  });

  it('should display 1 minute ago', () => {
    const unixTimeDiff = 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 minute ago');
  });

  it('should display 30 minutes ago', () => {
    const unixTimeDiff = 30 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('30 minutes ago');
  });

  it('should display 1 hour ago', () => {
    const unixTimeDiff = 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 hour ago');
  });

  it('should display 12 hours ago', () => {
    const unixTimeDiff = 12 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('12 hours ago');
  });

  it('should display 1 day ago', () => {
    const unixTimeDiff = 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 day ago');
  });

  it('should display 2 days ago', () => {
    const unixTimeDiff = 2 * 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('2 days ago');
  });

  it('should display 1 month ago', () => {
    const unixTimeDiff = 30 * 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 month ago');
  });

  it('should display 2 months ago', () => {
    const unixTimeDiff = 2 * 30 * 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('2 months ago');
  });

  it('should display 1 year ago', () => {
    const unixTimeDiff = 12 * 30 * 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('1 year ago');
  });

  it('should display 2 years ago', () => {
    const unixTimeDiff = 2 * 12 * 30 * 24 * 60 * 60;
    const unixTimestamp = Math.floor(Date.now() / 1000) - unixTimeDiff;

    expect(pipe.transform(unixTimestamp)).toEqual('2 years ago');
  });
});
