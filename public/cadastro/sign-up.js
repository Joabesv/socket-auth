import { emitUserSignUp } from './socket-sign-up.js';
const form = document.querySelector('#form-cadastro');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = form['input-usuario'].value;
  const password = form['input-senha'].value;

  emitUserSignUp({ user, password });
});
