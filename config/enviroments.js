/* function that returns an object to development enviroment */
function development() {
  return {
    cfgDB: {
      host: '-',
      user: '-',
      password: '-',
      database: '-',
    },
    cfgServer: {
      url: 'http://localhost:3000',
      host: '127.0.0.1',
      port: '3000',
    },
  };
}

/* function that returns an object to production enviroment */
function production() {
  return {
    cfgDB: {
      host: '-',
      user: '--',
      password: '-',
      database: '-',
    },
    cfgServer: {
      url: `-`,
      host: process.env.HOST,
      port: process.env.PORT,
    },
  };
}

/* main funciton that return and use the correct enviroments parameters */
function config() {
  switch (process.env.NODE_ENV) {
    case 'development':
      return development();

    case 'production':
      return production();

    default:
      return development();
  }
}

export default config;
