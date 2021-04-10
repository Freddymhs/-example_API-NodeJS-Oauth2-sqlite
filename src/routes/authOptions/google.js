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
      successRedirect: '/auth/logrado',
      failureRedirect: '/auth/fallo',
    })
  );
}

const google = {
  login, callback,
};
export default google;
