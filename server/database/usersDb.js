import { usersCollection } from './dbConnect.js';
/**
 * @param {Object} data
 * @param {string} data.user
 * @param {string} data.password
 */
export async function signUpUser({ user, password }) {
  return usersCollection.insertOne({ user, password });
}

/**
 * @param {string} user
 */
export async function findUser(user) {
  const data = await usersCollection.findOne({ user });
  return data;
}
