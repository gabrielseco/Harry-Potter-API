// import fs from 'fs';
// import express from 'express';
// import Schema from './data/schema';
// import GraphQLHTTP from 'express-graphql'
// import { MongoClient } from 'mongodb';
// import { graphql } from 'graphql';
// import { introspectionQuery } from 'graphql/utilities'
var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var stormpath = require('express-stormpath');
// import db from './db';

// console.log('MongoClient in server', MongoClient);


// const PORT = process.env.PORT || 3000;

// const app = express();
// app.use(express.static('public'));


// (async () => {
//   try {
//     let db = await MongoClient.connect(process.env.MONGO_URL)
//     let schema = Schema(db);

//     app.use('/graphql', GraphQLHTTP({
//       schema,
//       graphiql: true
//     }));

//     app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

//     let json = await graphql(schema, introspectionQuery);
//     fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
//       if (err) throw err.stack;
//       console.log('json schema created')
//     });
//   } catch(e) {
//     console.error(e.stack);
//   }
// })();
var path = require('path');
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

stormpath.init(app, {
  website: true
});

app.get('public/stylesheets/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/stylesheets/bootstrap.min.css'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});
