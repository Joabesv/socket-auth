import {
  addDocument,
  getDocuments,
  updateDocument,
  findDocument,
  removeDocument,
} from "./db/documentosDb.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  socket.on("document:get", async (returnDocuments) => {
    const documentos = await getDocuments();

    returnDocuments(documentos);
  });

  socket.on("document:add", async (name) => {
    const isDocument = (await findDocument(name)) !== null;

    if (isDocument) {
      socket.emit("document:exist", name);
    } else {
      const result = await addDocument(name);

      if (result.acknowledged) {
        io.emit("document:add-client", name);
      }
    }
  });

  socket.on("document:select", async (documentName, returnText) => {
    socket.join(documentName);

    const document = await findDocument(documentName);

    if (document) {
      returnText(document.text);
    }
  });

  socket.on("editor:text", async ({ text, documentName }) => {
    const updated = await updateDocument(documentName, text);

    if (updated.modifiedCount) {
      socket.to(documentName).emit("editor:text-rooms", text);
    }
  });

  socket.on("document:remove", async (name) => {
    const result = await removeDocument();

    if (result.deletedCount) {
      io.emit("document:remove-success", name);
    }
  });
});
