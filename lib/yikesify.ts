const YIKES = 'yikes';

const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz!?,.' ");

export const binaryStringToYikesWord = (binaryString: string) =>
  Array.from(binaryString)
    // e.g. "10101" -> "YiKeS"
    // Split into array of 0 or 1 digits
    // If 0 return relevant lowercase letter, if 1 return uppercase
    .map(
      (num, index) => (num === '1' ? YIKES[index].toUpperCase() : YIKES[index])
    )
    .join('');

export const yikesify = (text: string) =>
  Array.from(text)
    // Find the index of this letter in alphabet array
    // and convert number to binary string
    // pad start of string with zeros for 5 chars
    .map(letter =>
      alphabet
        .findIndex(x => x === letter)
        .toString(2)
        .padStart(5, '0')
    )
    .map(binaryStringToYikesWord)
    // join all the yIkeS words with a space
    .join(' ');

export const yikesWordToBinaryString = (word: string) =>
  // e.g., "YiKeS" -> "10101"
  // Make sure the word is "yikes"
  word.toLowerCase() === YIKES &&
  // Split into array of letters
  Array.from(word)
    // Convert to 0 for lowercase, 1 for uppercase
    .map(letter => (letter === letter.toUpperCase() ? 1 : 0))
    .join('');

export const deyikesify = (text: string) =>
  text
    .trim()
    // Split into array of YiKeS words
    .split(' ')
    // Convert each word to binary
    .map(yikesWordToBinaryString)
    // convert to base 10 and find character from alphabet array
    .map(binary => alphabet[parseInt(binary, 2)])
    .join('');
