import { MongoClient } from 'mongodb';

let db;

(async () => {
  try {
    db = MongoClient.connect(process.env.MONGO_URL)
    // return db;
    await export default db;
  } catch(e) {
    console.error(e.stack);
  }
})();

// async function () {
//   MongoClient.connect(process.env.MONGO_URL)
//   await 
// }();

// console.log('db from db', db);


// import { MongoClient } from 'mongodb';
// import promisify from 'es6-promisify';

// let _connection;

// const connect = () => {
//   // if (!process.env.MONGO_CONNECTION_STRING) {
//   //   throw new Error(`Environment variable MONGO_CONNECTION_STRING must be set to use API.`);
//   // }
//   return promisify (MongoClient.connect)(process.env.MONGO_URL);
// };

// *
//  * Returns a promise of a `db` object. Subsequent calls to this function returns
//  * the **same** promise, so it can be called any number of times without setting
//  * up a new connection every time.
 
// const connection = () => {
//   if (!_connection) {
//     _connection = connect();
//   }
//   return _connection;
// };
// export default connection;

// /**
//  * Returns a ready-to-use `collection` object from MongoDB.
//  *
//  * Usage:
//  *
//  */
//  // (await getCollection('users')).find().toArray().then( ... )
// export async function getCollection(characters) {
//   const db = await connection();
//   return db.collection(characters);
// }


