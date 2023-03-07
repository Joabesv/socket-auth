import { findUser } from '../database/usersDb.js';

/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerLoginEvents(socket, io) {
  socket.on('user:auth', async ({ user, password }) => {
    const { user: dbUser } = await findUser(user);
    console.log(dbUser)
  });
}
