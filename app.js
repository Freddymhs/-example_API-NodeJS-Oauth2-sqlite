import express from 'express'; // exporess module
import morgan from 'morgan'; // show https request
import cors from 'cors'; // cross  data allowed
import Config from './config/enviroments'; // config for each enviroment
import routes from './src/routes/routes'; // routes for my app

/** config to use in development or production
  * @type {Object}
  */
const cfg = new Config();

/** Express initialization module
  * @type {Object}
 */

const app = express();

/* middlewares */
// app.use(bodyParser.json());
app.use(morgan('combined')); // chekc extra data request
app.use(express.json()); // to use json in my app
app.use(express.urlencoded({ extended: false })); // undertand data from others forms
app.use(cors()); // allow share

/* the main routes */
app.use('/login', routes.loginRoute);
app.use('/user', routes.userRoute);

/* case route no exist */
app.all('*', (req, res) => {
  res.send('esta url no existe :[ ').status(200);
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
