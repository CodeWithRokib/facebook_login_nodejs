import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

passport.use(new FacebookStrategy({
    clientID: '356109227414063',
    clientSecret: '67b091bdf5ce193c5a87d39daec7b321',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Save or retrieve user from the database
    return done(null, profile);
  }
));

export default passport;