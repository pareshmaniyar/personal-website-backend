var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
   res.send("YO!! Hola!");
//    res.send({"key": "val"});
});

module.exports = router;