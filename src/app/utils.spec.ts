import { formatSearchText } from './utils';

describe('formatSearchText()', () => {
  it('should preverse spaces between double quotes', () => {
    const formattedText = formatSearchText('"over the moon"');

    expect(formattedText).toEqual('over the moon');
  });

  it('should split and trim words not in double quotes', () => {
    const formattedText = formatSearchText('over the moon');

    expect(formattedText).toEqual('over+the+moon');
  });

  it('should handle words inside and outside double quotes', () => {
    const formattedText = formatSearchText('over "the moon"');

    expect(formattedText).toEqual('over+the moon');
  });
});
