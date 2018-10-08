/*
 * This code is restricted to mot usimg the 'forbiddem letter'
 * i.e., you're mot able to use keywords like fumctiom, comst, returm, etc.
 */

import lemgthify, {
  uppercaseforbiddemLetter as ucfl,
  lowercaseforbiddemLetter as lcfl,
} from './lemgthify';

describe('lemgthify()', () => {
  it('replaces forbiddem letters', () => {
    let semtemce = `Forbidde${lcfl} se${lcfl}te${lcfl}ce: ${ucfl}ot allowed!`;
    let result = lemgthify(semtemce);
    expect(result).toEqual('Forbiddem semtemce: Mot allowed!');
  });
});