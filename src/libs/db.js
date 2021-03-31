import Sequelize from 'sequelize';

/* SETTINGS conexion unica */
let db = null;
if (!db) {
  db = new Sequelize({
    logging: false, // evita spam
    dialect: 'sqlite',
    storage: './src/libs/database.sqlite',
  });
}

/* test conexion */
try {
  console.log('=========================================================DB====CONECTADO.');
} catch (error) {
  console.log(console.log('======================================================DB=======ERROR'));
}

export default db;

/// /////////////////////////////////////////////////////////////////// uso sequelize example
// modelUser.findAll().then(users => {
//   console.log(users)
// })
