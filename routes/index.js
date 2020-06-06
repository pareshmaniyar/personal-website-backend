var express = require('express');
var app = express();
var router = express.Router();
import userRouter from './user.js';
import blogRouter from './blogs.js';

app.use('/user', userRouter);
app.use('/blog', blogRouter);

module.exports = router;
