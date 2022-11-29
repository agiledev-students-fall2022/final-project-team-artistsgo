const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require( 'passport' );


passport.use(new GoogleStrategy({
    clientID: '186661128169-rtbrhibr9p5ne088h88sssvl4sei2nto.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});