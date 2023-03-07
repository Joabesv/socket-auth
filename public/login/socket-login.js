const socket = io();

export function emitAuthUser(data) {
  socket.emit('user:auth', data)
}