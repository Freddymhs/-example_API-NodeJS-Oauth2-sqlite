import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

const Google = GoogleStrategy.Strategy;
const passportGoogle = passport;

/* serializacion de datos */
passportGoogle.serializeUser((user, done) => {
  done(null, user);
});

passportGoogle.deserializeUser((user, done) => {
  done(null, user);
});
/* basic configure */
passportGoogle.use(new Google({
  clientID: '57821686997-bq1bqtnjm9phl5es8d1fjv9gg5k50m12.apps.googleusercontent.com',
  clientSecret: 'JeXyXdaX6Ur3465GyOSySZeB',
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
},
((request, accessToken, refreshToken, profile, done) => done(null, profile))));

export default passportGoogle;
