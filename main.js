const express = require("express")
require('dotenv').config()
const app = express()

const {MongoClient} = require('mongodb');
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = 'books';
const db = client.db(dbName);
const collection = db.collection('books');

app.use("/static",express.static("static"))

app.get("/books", async function(req,res){
    let list = await collection.find({}).toArray();

    res.json(list)
})

app.listen(process.env.PORT)