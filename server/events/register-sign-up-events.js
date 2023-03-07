/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerSignUpEvents(socket, io) {
  socket.on('user:sign-up', ({ user, password }) => {
    console.log({
      user,
      password,
    });
  });
}
