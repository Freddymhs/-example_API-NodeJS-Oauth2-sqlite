import Sequelize from 'sequelize';
import db from '../libs/db';
import models from './models';

/* create model */
const modelUser = db.define('modelUser', {
  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  token: Sequelize.STRING,

});

/* gerate schema database in sql */
modelUser.sync({ force: true }).then(() => modelUser.create({
  name: 'freddy',
  lastname: 'freddy',
  email: 'freddy',
  token: 'freddy',
})).catch((err) => {
  console.log('====================SCHEMA======================');
  console.log(err);
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
  console.log('====================SCHEMA======================');
});

export default modelUser;
