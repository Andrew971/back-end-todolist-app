// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: 'pg',
    connection: {
      database: 'todoApp',
      user:     'andrewsordier',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection:'postgres://forlkxvljdpimg:3110c26991f3e573d725fafc8f229a52ddcb492e489abba6d15952928e18f2cf@ec2-54-243-239-66.compute-1.amazonaws.com:5432/dd3veias0vr4e2',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
