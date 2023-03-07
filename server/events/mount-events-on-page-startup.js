import {
  getDocuments,
  findDocument,
  addDocument,
} from '../database/documentsDb.js';

/**
 * Using JSDoc to make typesafe in javascript!
 * @param {import('socket.io').Socket} socket
 * @param {import('socket.io').Server} io
 */
export function mountEventsOnPageStartup(socket, io) {
  socket.on('document:get', async (returnDocuments) => {
    const documentos = await getDocuments();

    returnDocuments(documentos);
  });

  socket.on('document:add', async (name) => {
    const documents = await findDocument(name);
    const isDocument = documents !== null;

    if (isDocument) {
      socket.emit('document:exist', name);
    } else {
      const result = await addDocument(name);

      if (result.acknowledged) {
        socketServer.emit('document:add-client', name);
      }
    }
  });
}
