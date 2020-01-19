var express = require('express');
var router = express.Router();
import { MongoClient, MongoNetworkError } from 'mongodb';
const url = "mongodb://localhost:27017";
const dbName = "personal-website";
const client = new MongoClient(url);

router.get('/comments', (req, res) => {
   client.connect((err, client) => {
      if(err){
         console.log("MongoDB Connection Failed");
         res.send("MongoDB Connection Failed");
      } else {
         console.log("MongoDB Connected Successfuly, try to fetch comments collection");
         const db = client.db(dbName);
         const collection = db.collection('comments');
         collection.find().toArray((err, docs) => {
            if(err){
               console.log("Connection to MongoDB comments collection Failed");
               res.send("Connection to MongoDB comments collection Failed");
            } else {
               console.log(docs);
               res.send(docs);
            }
         });
      }
   })
});

router.post('/comments', (req, res) => {
   client.connect((err, client) => {
      if(err){
         console.log("MongoDB Connection Failed");
         res.send("MongoDB Connection Failed");
      } else {
         console.log("MongoDB Connected Successfuly, try to fetch comments collection");
         const db = client.db(dbName);
         const collection = db.collection('comments');
         let obj = {};
         try {
            let incomingObject = req.body;
            console.log("Inserting comment req body: ", req.body);
            obj['name'] = incomingObject.name;
            obj['comment'] = incomingObject.comment;
            if(obj.name == '' || obj.comment == '') {
               throw "object received is empty or not as expected. Must contain comment and name as key and value should be non empty";
            }
         } catch(e){
            console.log("object received is empty or not as expected. Must contain comment and name as key and value should be non empty");
            res.send("object received is empty or not as expected. Must contain comment and name as key and value should be non empty");
         }
         collection.insertOne(obj, (err, docs) => {
            if(err){
               console.log("Connection to MongoDB comments collection Failed");
               res.send("Connection to MongoDB comments collection Failed");
            } else {
               console.log(docs);
               res.send({"insert": "Successful"});
            }
         });
      }
   })   
});

router.get('/subscription', (req, res) => {
   client.connect((err, client) => {
      if(err){
         console.log("MongoDB Connection Failed");
         res.send("MongoDB Connection Failed");
      } else {
         console.log("MongoDB Connected Successfuly, try to fetch comments collection");
         const db = client.db(dbName);
         const collection = db.collection('subscribers');
         collection.find().toArray((err, docs) => {
            if(err){
               console.log("Connection to MongoDB comments collection Failed");
               res.send("Connection to MongoDB comments collection Failed");
            } else {
               console.log(docs);
               res.send(docs);
            }
         });
      }
   })
});

router.get('/subscription', (req, res) => {
   // res.send("subscription");
   client.connect((err, client) => {
      if(err){
         console.log("MongoDB Connection Failed");
         res.send("MongoDB Connection Failed");
      } else {
         console.log("MongoDB Connected Successfuly, try to subscribers fetch collection");
         const db = client.db(dbName);
         const collection = db.collection('subscribers');
         let obj = {};
         try {
            let incomingObject = req.params;
            console.log("Inserting email's req body: ", req.params);
            obj['email'] = incomingObject.email;
            if(obj.email == '') {
               throw "object received is empty or not as expected. Must contain comment and name as key and value should be non empty";
            }
         } catch(e){
            console.log("object received is empty or not as expected. Must contain non empty email");
            res.send("object received is empty or not as expected. Must contain non empty email");
         }
         collection.insertOne(obj, (err, docs) => {
            if(err){
               console.log("Connection to MongoDB subscrption collection Failed");
               res.send("Connection to MongoDB subscrption collection Failed");
            } else {
               console.log(docs);
               res.send({"insert": "Successful"});
            }
         });
      }
   })
});
module.exports = router;