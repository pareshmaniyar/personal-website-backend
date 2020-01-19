import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import multer from 'multer';
import routes from './routes';

let app = express();
console.log('HEY');
app.set('port', process.env.PORT || 3000)
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(multer())
app.use('/', routes);
var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
