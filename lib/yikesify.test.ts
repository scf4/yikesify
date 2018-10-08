import {
  yikesify,
  deyikesify,
  binaryStringToYikesWord,
  yikesWordToBinaryString
} from './yikesify';

describe('yikesify() and deyikesify()', () => {
  it('converts words to Yikes Text', () => {
    const words = 'abc def';
    const yikesText = yikesify(words);
    expect(yikesText).toEqual('yikes yikeS yikEs YIKES yikES yiKes yiKeS');
  });

  it('converts Yikes Text to words', () => {
    const yikesText = 'yikes yikeS yikEs YIKES yikES yiKes yiKeS';
    const words = deyikesify(yikesText);
    expect(words).toEqual('abc def');
  });

  it("doesn't deyikesify non-Yikes Text", () => {
    const yikesText = 'AbcdE fGhIk kLmNo';
    const words = deyikesify(yikesText);
    expect(words).toEqual('');
  });
});

describe('binary functions', () => {
  it('converts binary string to Yikes word', () => {
    const binaryString = '10101';
    const yikesWord = binaryStringToYikesWord(binaryString);
    expect(yikesWord).toEqual('YiKeS');
  });

  it('converts Yikes word to binary string', () => {
    const yikesWord = 'YiKeS';
    const binaryString = yikesWordToBinaryString(yikesWord);
    expect(binaryString).toEqual('10101');
  });
});
