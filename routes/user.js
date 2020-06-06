var express = require('express');
var router = express.Router();

router.post('/subscribe', (req, res) => {
   res.send("subscribed");
   // client.connect((err, client) => {
   //    if(err){
   //       console.log("MongoDB Connection Failed");
   //       res.send("MongoDB Connection Failed");
   //    } else {
   //       console.log("MongoDB Connected Successfuly, try to fetch comments collection");
   //       const db = client.db(dbName);
   //       const collection = db.collection('comments');
   //       collection.find().toArray((err, docs) => {
   //          if(err){
   //             console.log("Connection to MongoDB comments collection Failed");
   //             res.send("Connection to MongoDB comments collection Failed");
   //          } else {
   //             console.log(docs);
   //             res.send(docs);
   //          }
   //       });
   //    }
   // })
});

router.get('/unsubscribe', (req, res) => {
   res.send("unsubscribed");
   // client.connect((err, client) => {
   //    if(err){
   //       console.log("MongoDB Connection Failed");
   //       res.send("MongoDB Connection Failed");
   //    } else {
   //       console.log("MongoDB Connected Successfuly, try to fetch comments collection");
   //       const db = client.db(dbName);
   //       const collection = db.collection('comments');
   //       collection.find().toArray((err, docs) => {
   //          if(err){
   //             console.log("Connection to MongoDB comments collection Failed");
   //             res.send("Connection to MongoDB comments collection Failed");
   //          } else {
   //             console.log(docs);
   //             res.send(docs);
   //          }
   //       });
   //    }
   // })
});

module.exports = router;
