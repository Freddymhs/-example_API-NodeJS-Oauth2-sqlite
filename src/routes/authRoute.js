import express from 'express';
import passport from 'passport';

// import google from './Auth/operations-socials/google';
import options from './authOptions/options';

const authRoute = new express.Router();

authRoute.use(passport.initialize());

// operations for google
authRoute.get('/google', options.google.login());
authRoute.get('/google/callback', options.google.callback());

authRoute.get('/facebook', (req, res) => { res.send('fbk'); });
authRoute.get('/email', (req, res) => { res.send('email'); });

export default authRoute;
