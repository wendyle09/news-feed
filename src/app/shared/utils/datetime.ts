const TIME_UNITS = [
  { unitSingular: 'minute', unitPlural: 'minutes', secondsPerUnit: 60 },
  { unitSingular: 'hour', unitPlural: 'hours', secondsPerUnit: 60 * 60 },
  { unitSingular: 'day', unitPlural: 'days', secondsPerUnit: 60 * 60 * 24 },
  {
    unitSingular: 'month',
    unitPlural: 'months',
    secondsPerUnit: 60 * 60 * 24 * 30,
  },
  {
    unitSingular: 'year',
    unitPlural: 'years',
    secondsPerUnit: 60 * 60 * 24 * 30 * 12,
  },
];

export const getRelativeTimeFromUnix = (unixTime: number) => {
  const currentUnixTime = Date.now() / 1000;
  const timeDiff = currentUnixTime - unixTime;

  for (let i = TIME_UNITS.length - 1; i >= 0; i--) {
    if (timeDiff >= TIME_UNITS[i].secondsPerUnit) {
      const convertedTime = Math.round(timeDiff / TIME_UNITS[i].secondsPerUnit);
      const convertedTimeUnit =
        convertedTime == 1
          ? TIME_UNITS[i].unitSingular
          : TIME_UNITS[i].unitPlural;

      return `${convertedTime} ${convertedTimeUnit} ago`;
    }
  }

  return `${timeDiff} ${timeDiff == 1 ? 'second' : 'seconds'} ago`;
};
