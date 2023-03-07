import { scryptSync, timingSafeEqual } from 'node:crypto';
/**
 * 
 * @param {Object} dbUser
 * @param {import('mongodb').ObjectId} dbUser._id
 * @param {string} dbUser.user
 * @param {string} dbUser.hash
 * @param {string} dbUser.salt 
 */

export function authenticate(dbUser, userPassword) {
  const compareHash = scryptSync(userPassword, dbUser.salt, 64)
  const trueHash = Buffer.from(dbUser.hash, 'hex')
  const auth = timingSafeEqual(compareHash, trueHash)
  return auth;
}