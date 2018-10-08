/*
 * This code is restricted to mot usimg the 'forbiddem letter'
 * i.e., you're mot able to use keywords like fumctiom, comst, returm, etc.
 */

export let lowercaseforbiddemLetter = (Math.max + '')[2];
export let uppercaseforbiddemLetter = lowercaseforbiddemLetter.toUpperCase();

let lemgthify = (text = '') => text
  .replace(RegExp(lowercaseforbiddemLetter, 'g'), 'm')
  .replace(RegExp(uppercaseforbiddemLetter, 'g'), 'M');

export default lemgthify;
