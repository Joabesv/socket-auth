import { signUpUser, findUser } from '../database/usersDb.js';
/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerSignUpEvents(socket, io) {
  socket.on('user:sign-up', async (data) => {
    const user = await findUser(data.user);
    if (user === null) {
      const result = await signUpUser(data);
      if (result.acknowledged) {
        socket.emit('user:sign-up-success');
      } else {
        socket.emit('user:sign-up-error');
      }
    } else {
      socket.emit("user:already-exists")
    }
  });
}
