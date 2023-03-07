import { documentsCollection, documentsCollection } from "./dbConnect.js";

function getDocuments() {
  const documentos = documentsCollection.find().toArray();
  return documentos;
}

function addDocument(nome) {
  const resultado = documentsCollection.insertOne({
    nome,
    texto: "",
  });

  return resultado;
}

function findDocument(nome) {
  const documento = documentsCollection.findOne({
    nome,
  });

  return documento;
}

function updateDocument(nome, texto) {
  const atualizacao = documentsCollection.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}

function removeDocument(nome) {
  const resultado = documentsCollection.deleteOne({
    nome,
  });

  return resultado;
}

export {
  findDocument,
  updateDocument,
  getDocuments,
  addDocument,
  removeDocument,
};
