import { documentsCollection } from './dbConnect.js';

function getDocuments() {
  const documents = documentsCollection.find().toArray();
  return documents;
}

function addDocument(name) {
  const result = documentsCollection.insertOne({
    name,
    text: '',
  });

  return result;
}

function findDocument(name) {
  const documento = documentsCollection.findOne({
    name,
  });

  return documento;
}

function updateDocument(name, text) {
  const update = documentsCollection.updateOne(
    {
      name,
    },
    {
      $set: {
        text,
      },
    }
  );

  return update;
}

function removeDocument(name) {
  const result = documentsCollection.deleteOne({
    name,
  });

  return result;
}

export {
  findDocument,
  updateDocument,
  getDocuments,
  addDocument,
  removeDocument,
};
