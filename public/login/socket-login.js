const socket = io();

export function emitAuthUser(data) {
  socket.emit('user:auth', data);
}

socket.on('auth:success', () => {
  alert('user authenticated with success');
  window.location.href = '/';
});
socket.on('auth:error', () => alert('error in authentication'));
socket.on('user:not-found', () => alert('user not found'));
