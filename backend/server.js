const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const cors = require('cors');
console.log(process.env.MONGO_URI);

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
dotenv.config()

// Database Name
const dbName = 'PassOP'; 
app.use(bodyParser.json());
app.use(cors());

//get api
app.get('/', async (req, res) => {
  await client.connect();
  // const password = req.body ;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');

  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

//post apii
app.post('/', async (req, res) => {
  await client.connect();
  const password = req.body ;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');

  const findResult = await collection.insertOne(password);
  res.send({success : true , find : findResult})
})
//delete Password by id
app.delete('/', async (req, res) => {
  await client.connect();
  const {id} = req.body ;
  const db = client.db(dbName);
  const collection = db.collection('Passwords');

  const findResult = await collection.deleteOne({id});
  res.send({success : true , find : findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
