import { emitAddDocument } from './socket-front-index.js';
import { getCookie, removeCookie } from './utils/cookies.js';

const jwt = getCookie('jwtToken');
const documentList = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const documentInput = document.getElementById('input-documento');
const logoutBtn = document.querySelector('#botao-logout')

logoutBtn.addEventListener('click', () => {
  removeCookie('jwtToken');
  alert('Logout successfully')
  window.location.href = '/login/index.html'
})
form.addEventListener('submit', (event) => {
  event.preventDefault();
  emitAddDocument(documentInput.value);
  documentInput.value = '';
});

function insertDocumentLink(documentName) {
  documentList.innerHTML += `
    <a
      href="/documento/index.html?nome=${documentName}"
      class="list-group-item list-group-item-action"
      id="documento-${documentName}"
    >
      ${documentName}
    </a>
  `;
}

function removeDocumentLink(documentName) {
  const document = document.getElementById(`documento-${documentName}`);

  documentList.removeChild(document);
}

export { insertDocumentLink, removeDocumentLink };
