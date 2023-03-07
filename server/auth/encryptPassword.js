import { randomBytes, scryptSync } from 'node:crypto';

/**
 * @param {string} userPassword
 */

export function encryptPassword(userPassword) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(userPassword, salt, 64).toString('hex');

  return {
    hash, salt
  }
}