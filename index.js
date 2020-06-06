import http from 'http';
import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import blogRouter from './routes/blogs.js';

const config = require('./local-config');
let app = express();

/* Base Setup */
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: "pareshmaniyar",
  keys: config.cookieSessionKeys
}));
require('./passport-config.js');
app.use(passport.initialize());
app.use(passport.session());
/* Base Setup End */

/* Routing */
app.use('/user', userRouter);
app.use('/blog', blogRouter);
/* Routing End */

/* Google Oauth */
app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login-success');
});

/* Google Oauth End */

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})


