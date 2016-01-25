import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql'
import { MongoClient } from 'mongodb';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities'

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));


(async () => {
  try {
    let db = await MongoClient.connect(process.env.MONGO_URL)
    let schema = Schema(db);
  
    app.use('/graphql', GraphQLHTTP({
      schema,
      graphiql: true
    }));
  
    app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
  
    // generate schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err.stack;
      console.log('json schema created')
    });
  } catch(e) {
    console.error(e.stack);
  }
})();
