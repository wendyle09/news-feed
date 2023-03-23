import { formatSearchText } from './utils';

describe('formatSearchText()', () => {
  it('should preverse spaces between double quotes', () => {
    const formattedText = formatSearchText('"search phrase"');

    expect(formattedText).toEqual('search phrase');
  });
});
