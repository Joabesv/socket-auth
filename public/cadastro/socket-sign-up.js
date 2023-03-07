const socket = io();
/**
 * @param {Object} data
 * @param {string} data.user
 * @param {string} data.password
 */
export function emitUserSignUp(data) {
  socket.emit('user:sign-up', data);
}
