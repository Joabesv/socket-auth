import { encryptPassword } from '../auth/encryptPassword.js';
import { usersCollection } from './dbConnect.js';
/**
 * @param {Object} data
 * @param {string} data.user
 * @param {string} data.password
 */
export async function signUpUser({ user, password }) {
  const { hash, salt } = encryptPassword(password);
  return usersCollection.insertOne({ user, hash, salt });
}

/**
 * @param {string} user
 */
export async function findUser(user) {
  const data = await usersCollection.findOne({ user });
  return data;
}
