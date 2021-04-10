import google from './google';

// function to protect all my routes when , check is logged the user
export function isLogged(req, res, next) { // revisa
  req.user ? next() : res.sendStatus(401); // revisa google trae usuario
}

const options = { google };
export default options;
