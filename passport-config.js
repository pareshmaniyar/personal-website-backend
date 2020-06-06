const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./local-config.js');

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
        done(null, user);
    // });
});

passport.use(new GoogleStrategy({
    clientID: config.google.GOOGLE_CLIENT_ID,
    clientSecret: config.google.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(null, profile);
    // });
  }
));