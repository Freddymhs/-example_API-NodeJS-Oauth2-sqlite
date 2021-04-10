import passport from 'passport';
import '../../../config/authenticate';

function login() {
  return (
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
}

function callback() {
  return (
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
    })
  );
}

const google = { login, callback };
export default google;
