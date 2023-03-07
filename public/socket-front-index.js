import { insertDocumentLink, removeDocumentLink } from './index.js';

const socket = io();

socket.emit('document:get', (documents) => {
  documents.forEach((document) => {
    insertDocumentLink(document.name);
  });
});

function emitAddDocument(name) {
  socket.emit('document:add', name);
}

socket.on('document:add-client', (name) => {
  insertDocumentLink(name);
});

socket.on('document:exist', (name) => {
  alert(`O documento ${name} já existe!`);
});

socket.on('document:remove-success', (name) => {
  removeDocumentLink(name);
});

export { emitAddDocument };
