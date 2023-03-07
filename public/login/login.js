import { emitAuthUser } from './socket-login.js';
const form = document.querySelector('#form-login');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = form['input-usuario'].value;
  const password = form['input-senha'].value;

  emitAuthUser({ user, password });
});
