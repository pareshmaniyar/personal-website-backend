var express = require('express');
var router = express.Router();

router.get('/:id', (req, res) => {
   res.send("blogs get ");
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

router.post('/:id/comment', (req, res) => {
   res.send("post comment");
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

router.post('/:id/edit-comment', (req, res) => {
   res.send("edit-comment");
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
