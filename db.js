import { MongoClient } from 'mongodb';

export let db;

(async () => {
  try {
    db = await MongoClient.connect(process.env.MONGO_URL)
  } catch(e) {
    console.error(e.stack);
  }
})();