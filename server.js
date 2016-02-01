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
const compiler = webpack(config);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    let db = await MongoClient.connect(process.env.MONGO_URL)
    let hpSchema = HPSchema(db);
    let schema = Schema(db);

    server.use(morgan('dev'));

    // publicly available HP GraphQL IDE
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./src/data/schema.json', JSON.stringify(json, null, 2), err => {
      if (err) throw err.stack;
      console.log('App json schema created')
    });
    server.use('/graphql', GraphQLHTTP({
      schema: hpSchema,
      graphiql: true
    }));

    // private GraphQL IDE for app
    server.use('/privateGraphql', GraphQLHTTP({
      schema: schema,
      graphiql: true
    }));
    let hpJson = await graphql(hpSchema, introspectionQuery);
    fs.writeFile('./src/data/hp-database/schema.json', JSON.stringify(hpJson, null, 2), err => {
      if (err) throw err.stack;
      console.log('HP  json schema created')
    });
    
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
      server.listen(PORT, 'localhost', function (err) {
        if (err) {
          return console.error(err);
        }
        console.log(`Server listening on port ${PORT}`);
      });
    });

  } catch(e) {
    console.error(e.stack);
  }
})();

