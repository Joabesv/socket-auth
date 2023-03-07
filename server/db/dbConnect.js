import { MongoClient } from 'mongodb';

const client = new MongoClient(
  'mongodb://admin:veryHardPwd@127.0.0.1:27017/?authSource=admin'
);

let documentsCollection;

try {
  await client.connect();
  const db = client.db('websockets');
  documentsCollection = db.collection('documents');
  console.log('Conectado ao banco de dados com sucesso!');
} catch (err) {
  console.log(err);
}

export { documentsCollection };
