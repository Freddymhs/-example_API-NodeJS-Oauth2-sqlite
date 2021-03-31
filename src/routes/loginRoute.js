import express from 'express';

const loginRoute = new express.Router();

loginRoute.get('/google', (req, res) => {
  res.send('logeando a mi aplicacion');
});

export default loginRoute;
