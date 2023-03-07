const socket = io();
/**
 * @param {Object} data
 * @param {string} data.user
 * @param {string} data.password
 */
export function emitUserSignUp(data) {
  socket.emit('user:sign-up', data);
}

socket.on('user:sign-up-success', () => alert('User successfully sign-up'))
socket.on('user:sign-up-error', () => alert('Error in sign-up'))
socket.on('user:already-exists', () => alert('user already exists'))
