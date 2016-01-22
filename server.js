// 'use strict';

import express from 'express';
import { MongoClient } from 'mongodb';

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;
  
  db = database;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  });


});


app.get('/data/characters', (req, res) => {
  db.collection('characters').find({}).toArray((err, characters) => {
    if (err) throw err;
    console.log(characters);
    res.json(characters);
  });
})