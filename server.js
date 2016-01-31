import fs from 'fs';
import express from 'express';
import GraphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import { MongoClient } from 'mongodb';
import { introspectionQuery } from 'graphql/utilities';
import morgan from 'morgan';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config';
import stormpath from 'express-stormpath';

import Schema from './src/data/schema';
import HPSchema from './src/data/hp-database/schema';
import db from './db';

const server = express();
const graphqlServer = express();
const compiler = webpack(config);

const SERVER_PORT = process.env.PORT || 3000;
const GRAPHQL_PORT = process.env.PORT || 8080;
// const SERVER_PORT = process.env.PORT || 3000;

(async () => {
  try {
    let db = await MongoClient.connect(process.env.MONGO_URL)
    let hpSchema = HPSchema(db);
    let schema = Schema(db);

    server.use(morgan('dev'));

    // publicly available HP graphQL IDE
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./src/data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err.stack;
      console.log('json schema created')
    });
    server.use('/graphql', GraphQLHTTP({
      schema: hpSchema,
      graphiql: true
    }));

    server.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    stormpath.init(server, {
      website: true
    });

    server.get('/css/style.css', function (req, res) {
      res.sendFile(path.join(__dirname, 'build/css/style.css'));
    });

    server.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build/index.html'));
    });

    server.on('stormpath.ready', function () {
      server.listen(SERVER_PORT, 'localhost', function (err) {
        if (err) {
          return console.error(err);
        }
        console.log(`Server  listening on port ${SERVER_PORT}`);
      });
    });

    // private graphQL IDE for app
    graphqlServer.use('/', GraphQLHTTP({
      schema: schema,
      graphiql: true
    }));
    let hpJson = await graphql(hpSchema, introspectionQuery);
    fs.writeFile('./src/data/hp-database/schema.json', JSON.stringify(hpJson, null, 2), err => {
      if (err) throw err.stack;
      console.log('json hpSchema created')
    });
    graphqlServer.listen(GRAPHQL_PORT, () => console.log(`GraphQL listening on port ${GRAPHQL_PORT}.`));
    

  } catch(e) {
    console.error(e.stack);
  }
})();

