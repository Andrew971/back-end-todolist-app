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
    connection:{
      database:'postgres://pvdktlsqiflocg:6f70b41436be046b08583f359560648a260ccdfed5aa4896bd153d508f7f38c7@ec2-50-17-206-214.compute-1.amazonaws.com:5432/dd4jl772brs562'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
