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
      successRedirect: '/user/newprofile',
      failureRedirect: '/auth/google',
    })
  );
}

const google = {
  login, callback,
};
export default google;
