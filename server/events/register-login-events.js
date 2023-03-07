import { findUser } from '../database/usersDb.js';
import { authenticate } from '../auth/auth.js'

/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerLoginEvents(socket, io) {
  socket.on('user:auth', async ({ user, password }) => {
    const dbUser = await findUser(user);

    if (dbUser) {
      const authenticatedUser = authenticate(dbUser, password);
      if (authenticatedUser) {
        socket.emit('auth:success')
      } else {
        socket.emit('auth:error')
      }
    } else {
      socket.emit('user:not-found')
    }

   
  });
}
