const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require( 'passport' );
require('dotenv').config( { path: '../../.env' } );

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const GITHUB_CLIENT_ID = "your id";
// const GITHUB_CLIENT_SECRET = "your id";
// const FACEBOOK_APP_ID = "your id";
// const FACEBOOK_APP_SECRET = "your id";

passport.use(new GoogleStrategy({
    clientID: "858364270611-n9baol12m5cjh86n47ruam7uci496co4.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
// )
// );

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


