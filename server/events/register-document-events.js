import {
  updateDocument,
  findDocument,
  removeDocument,
} from '../database/documentsDb.js';
/**
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function registerDocumentEvents(socket, io) {
  socket.on('document:select', async (documentName, returnText) => {
    socket.join(documentName);

    const document = await findDocument(documentName);

    if (document) {
      returnText(document.text);
    }
  });

  socket.on('editor:text', async ({ text, documentName }) => {
    const updated = await updateDocument(documentName, text);

    if (updated.modifiedCount) {
      socket.to(documentName).emit('editor:text-rooms', text);
    }
  });

  socket.on('document:remove', async (name) => {
    const result = await removeDocument();

    if (result.deletedCount) {
      socketServer.emit('document:remove-success', name);
    }
  });
}
