import jwt from 'jsonwebtoken';

/**
 * 
 * @typedef {Object} generateJwtReturn
 * @property {string} jwtToken 
 * 
 * @param {Object} payload
 * @param {string} payload.username
 * @returns {generateJwtReturn}
 */

export function generateJwt(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '10h',
  });

  return { jwtToken: token };
}
