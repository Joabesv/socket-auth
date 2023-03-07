import { findUser } from '../database/usersDb.js';
import { authenticate } from '../auth/auth.js';
import { generateJwt } from '../auth/generateJwt.js';

/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerLoginEvents(socket, io) {
  socket.on('user:auth', async ({ user, password }) => {
    const dbUser = await findUser(user);

    if (dbUser) {
      const { jwtToken } = generateJwt({ username: user });
      const authenticatedUser = authenticate(dbUser, password);
      if (authenticatedUser) {
        socket.emit('auth:success', jwtToken);
      } else {
        socket.emit('auth:error');
      }
    } else {
      socket.emit('user:not-found');
    }
  });
}
