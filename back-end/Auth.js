const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require( 'passport' );


passport.use(new GoogleStrategy({
    clientID: '858364270611-n9baol12m5cjh86n47ruam7uci496co4.apps.googleusercontent.com',
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