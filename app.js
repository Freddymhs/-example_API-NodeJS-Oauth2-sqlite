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
app.use(morgan('combined')); // check extra data request
app.use(express.json()); // to understand on recibe a json code
app.use(express.urlencoded({ extended: false })); // to understand on recibe string and arrays
app.use(cors()); // allow share

/* the main routes */

app.use('/auth', routes.authRoute); // todo lo relacionado a la authenticacion del usuario
app.use('/user', routes.userRoute); // todas mis operaciones tipo crud :] , que ademas estaran protegidas :]

/* case route no exist */
const html = `
<h1>desde POSTMAN!!</h1>
<ul>
<li><a href="/login/google">/login/google</a></li>
<li>-</li>
<li><a href="/user/newprofile">/user/newprofile</a></li>
<li><a href="/user/myprofile">/user/myprofile</a></li>

</ul>
`;
app.all('*', (req, res) => { res.send(html); });

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
