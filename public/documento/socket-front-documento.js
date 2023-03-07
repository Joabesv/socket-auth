import { warnAndRedirect, updateTextEditor } from './document.js';

const socket = io();

function selectDocument(name) {
  socket.emit('document:select', name, (text) => {
    updateTextEditor(text);
  });
}

function emitTextEditor(data) {
  socket.emit('editor:text', data);
}

socket.on('editor:text-rooms', (text) => {
  updateTextEditor(text);
});

function emitDocumentRemove(name) {
  socket.emit('document:remove', name);
}

socket.on('document:remove-success', (name) => {
  warnAndRedirect(name);
});

export { emitTextEditor, selectDocument, emitDocumentRemove };
