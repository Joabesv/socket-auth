import {
  emitDocumentRemove,
  selectDocument,
  emitTextEditor,
} from './socket-front-documento.js';

const params = new URLSearchParams(window.location.search);
const documentName = params.get('nome');

const textEditor = document.getElementById('editor-texto');
const documentTitle = document.getElementById('titulo-documento');
const removeButton = document.getElementById('excluir-documento');

documentTitle.textContent = documentName || 'Documento sem título';

selectDocument(documentName);

textEditor.addEventListener('keyup', () => {
  emitTextEditor({
    text: textEditor.value,
    documentName,
  });
});

function updateTextEditor(text) {
  textEditor.value = text;
}

removeButton.addEventListener('click', () => {
  emitDocumentRemove();
});

function warnAndRedirect(name) {
  if (name === documentName) {
    alert(`Documento ${name} excluído!`);
    window.location.href = '/';
  }
}

export { updateTextEditor, warnAndRedirect };
