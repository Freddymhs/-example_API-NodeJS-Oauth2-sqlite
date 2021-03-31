import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Config from './config/enviroments.js';

/** config to use in development or production
  * @type {Object}
  */
const cfg = new Config();

/** Express initialization module
  * @type {Object}
 */
const app = express();

/* middlewares */
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors()); // allow share

/* the main routes */
app.get('/', (req, res) => {
  res.send('esta aplicaicon ya funciona');
});


/* case route no exist */
app.all('*', (req, res) => {
  res.send('esta contenido con sirve para nada');
});

/* run server */
app.listen(cfg.cfgServer.port, (err) => {
  if (err) {
    console.log(`error-${err}`);
  } else {
    console.log('RUNNING===========');
    console.log('==================');
    console.log(process.env.npm_package_name);
    console.log('==================');
    console.log('ON================');
    console.log('==================');
    console.log(`${cfg.cfgServer.url}==`);
    console.log(`${cfg.cfgServer.host}=========`);
    console.log(`${cfg.cfgServer.port}==============`);
  }
});
